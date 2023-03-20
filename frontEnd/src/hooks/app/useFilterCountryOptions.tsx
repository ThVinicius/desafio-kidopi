import { useMemo } from 'react'

export default function useFilterCountryOptions(
  countries: string[] | null,
  firstCountry: string,
  secondCountry: string
) {
  const firstCountryOptions = useMemo(() => {
    return countries?.filter(country => !(country === secondCountry))
  }, [countries, secondCountry])

  const secondCountryOptions = useMemo(() => {
    return countries?.filter(country => !(country === firstCountry))
  }, [countries, firstCountry])

  return { firstCountryOptions, secondCountryOptions }
}
