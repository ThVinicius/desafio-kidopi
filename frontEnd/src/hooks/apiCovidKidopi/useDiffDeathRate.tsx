import axios from 'axios'
import { useEffect, useState } from 'react'
import { currentDate } from '../../utils/currentDate'
import { totalConfirmed, totalDead } from '../../utils/handleCountryInformation'
import { IInfo } from './useGetCountryInfo'

export default function useDiffDeathRate(
  firstCountry: string,
  secondCountry: string
) {
  const [firstDeathRate, setFirstDeathRate] = useState<number | null>(null)
  const [secondDeathRate, setSecondDeathRate] = useState<number | null>(null)
  const [diffDeathRate, setDiffDeathRate] = useState<number | null>(null)
  const [date, setDate] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (firstCountry === '' || secondCountry === '') return
    setLoading(true)
    setDiffDeathRate(null)

    const { brFormat, euaFormat } = currentDate()

    const URL = 'https://dev.kidopilabs.com.br/exercicio/covid.php?pais='

    const firstInfoPromise = axios.get<Record<number, IInfo>>(
      `${URL}${firstCountry}`
    )
    const secondInfoPromise = axios.get<Record<number, IInfo>>(
      `${URL}${secondCountry}`
    )

    Promise.all([firstInfoPromise, secondInfoPromise])
      .then(([first, second]) => {
        const firstInfo = Object.values(first.data)
        const secondInfo = Object.values(second.data)

        const firstTotalConfirmed = totalConfirmed(firstInfo)
        const firstTotalDead = totalDead(firstInfo)

        const firstDeathRate = firstTotalDead / firstTotalConfirmed
        setFirstDeathRate(firstDeathRate)

        const secondTotalConfirmed = totalConfirmed(secondInfo)
        const secondTotalDead = totalDead(secondInfo)

        const secondDeathRate = secondTotalDead / secondTotalConfirmed
        setSecondDeathRate(secondDeathRate)

        const diffDeathRate = Math.abs(firstDeathRate - secondDeathRate)

        setDiffDeathRate(diffDeathRate)

        const API_URL = import.meta.env.VITE_API_URL
        const firstPayload = {
          country: firstCountry,
          search_date: euaFormat
        }
        const secondPayload = {
          country: secondCountry,
          search_date: euaFormat
        }

        setDate(brFormat)

        axios.post(`${API_URL}/covid-stats`, firstPayload)
        axios.post(`${API_URL}/covid-stats`, secondPayload)
      })
      .finally(() => setLoading(false))
  }, [firstCountry, secondCountry])

  return {
    firstDeathRate,
    secondDeathRate,
    diffDeathRate,
    date,
    loading
  }
}
