import { FC, useEffect, useState } from 'react'
import useGetCountries from '../../../hooks/apiCovidKidopi/useGetCountries'
import useFilterCountryOptions from '../../../hooks/app/useFilterCountryOptions'
import useDiffDeathRate from '../../../hooks/apiCovidKidopi/useDiffDeathRate'
import Form from '../form/Form'
import { Title } from '../../home/content/contentStyle'
import { Box, Container, FormBox } from './contentStyle'
import Card from '../card/Card'
import Footer from '../footer/Footer'
import Loading from '../../../components/loading/Loading'

const Content: FC = () => {
  const [firstCountry, setFirstCountry] = useState('')
  const [secondCountry, setSecondCountry] = useState('')
  const { fetch, countries } = useGetCountries()
  const { firstCountryOptions, secondCountryOptions } = useFilterCountryOptions(
    countries,
    firstCountry,
    secondCountry
  )
  const { firstDeathRate, secondDeathRate, diffDeathRate, date, loading } =
    useDiffDeathRate(firstCountry, secondCountry)

  useEffect(() => fetch(), [])

  return (
    <Container>
      <Box>
        <Title>Diferença de taxa de mortes entre países</Title>
        <FormBox>
          <Form
            index={1}
            countryOptions={firstCountryOptions}
            value={firstCountry}
            setValue={setFirstCountry}
          />
          <Form
            index={2}
            countryOptions={secondCountryOptions}
            value={secondCountry}
            setValue={setSecondCountry}
          />
        </FormBox>
        {diffDeathRate !== null ? (
          <Card
            {...{
              firstCountry,
              secondCountry,
              firstDeathRate,
              secondDeathRate,
              diffDeathRate
            }}
          />
        ) : (
          <Loading loading={loading} />
        )}
      </Box>
      <Footer {...{ firstCountry, secondCountry, date }} />
    </Container>
  )
}

export default Content
