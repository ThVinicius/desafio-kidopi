import { useState } from 'react'
import axios from 'axios'

type ICountries = Record<number, string>

export default function useGetCountries() {
  const [countries, setCountries] = useState<string[] | null>(null)
  const [loading, setLoading] = useState(false)

  const fetch = () => {
    if (loading) return
    setLoading(true)

    const URL =
      'https://dev.kidopilabs.com.br/exercicio/covid.php?listar_paises=1'

    const promise = axios.get<ICountries>(URL)

    promise
      .then(({ data }) => setCountries(Object.values(data)))
      .catch(() => alert('Ocorreu um na API de Covid\nTente mais tarde'))
      .finally(() => setLoading(false))
  }

  return { fetch, loading, countries }
}
