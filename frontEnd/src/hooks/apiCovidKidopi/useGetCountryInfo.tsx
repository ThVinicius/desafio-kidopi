import { useState } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

export interface IInfo {
  Pais: string
  ProvinciaEstado: string
  Mortos: number
  Confirmados: number
}

export function useGetCountryInfo() {
  const [info, setInfo] = useState<IInfo[] | null>(null)
  const [date, setDate] = useState('')
  const [country, setCountry] = useState('')
  const [confirmed, setConfirmed] = useState<number | null>(null)
  const [dead, setDead] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const fetch = (country: string) => {
    if (loading) return
    setLoading(true)

    const now = dayjs()
    const nowFormat = now.format('DD/MM/YYYY HH:mm:ss')
    setDate(nowFormat)

    const URL = `https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${country}`

    const promise = axios.get<Record<number, IInfo>>(URL)

    promise
      .then(({ data }) => {
        const API_URL = import.meta.env.VITE_API_URL
        const payload = {
          country,
          search_date: now.format('YYYY-MM-DD HH:mm:ss')
        }

        axios.post(`${API_URL}/covid-stats`, payload)

        const infos = Object.values(data)

        setCountry(infos[0].Pais)
        const totalConfirmed = infos.reduce(
          (acc, curr) => curr.Confirmados + acc,
          0
        )
        const totalDead = infos.reduce((acc, curr) => curr.Mortos + acc, 0)

        setConfirmed(totalConfirmed)
        setDead(totalDead)

        setInfo(infos)
      })
      .catch(() => alert('Ocorreu um na API de Covid\nTente mais tarde'))
      .finally(() => setLoading(false))
  }

  return { fetch, country, dead, confirmed, info, date }
}
