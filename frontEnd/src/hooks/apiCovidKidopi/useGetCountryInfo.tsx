import { useState } from 'react'
import axios from 'axios'
import { totalConfirmed, totalDead } from '../../utils/handleCountryInformation'
import { currentDate } from '../../utils/currentDate'

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

    const { brFormat, euaFormat } = currentDate()

    setDate(brFormat)

    const URL = `https://dev.kidopilabs.com.br/exercicio/covid.php?pais=${country}`

    const promise = axios.get<Record<number, IInfo>>(URL)

    promise
      .then(({ data }) => {
        const API_URL = import.meta.env.VITE_API_URL
        const payload = {
          country,
          search_date: euaFormat
        }

        axios.post(`${API_URL}/covid-stats`, payload)

        const infos = Object.values(data)

        setCountry(infos[0].Pais)

        setConfirmed(totalConfirmed(infos))
        setDead(totalDead(infos))

        setInfo(infos)
      })
      .catch(() => alert('Ocorreu um na API de Covid\nTente mais tarde'))
      .finally(() => setLoading(false))
  }

  return { fetch, country, dead, confirmed, info, date }
}
