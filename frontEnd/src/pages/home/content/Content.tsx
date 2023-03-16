import { FC } from 'react'
import { useGetCountryInfo } from '../../../hooks/apiCovidKidopi/useGetCountryInfo'
import Footer from '../footer/Footer'
import Form from '../form/Form'
import Info from '../info/Info'
import Table from '../table/Table'
import { Box, Container, Title } from './contentStyle'

const Content: FC = () => {
  const { fetch, info, country, confirmed, dead, date } = useGetCountryInfo()

  return (
    <Container>
      <span>
        <Title>Mortes por Covid nos países</Title>
        <Form {...{ fetch }} />
        {info !== null && (
          <Box>
            <Info country={country!} confirmed={confirmed!} dead={dead!} />
            <Table data={info!} />
          </Box>
        )}
      </span>
      <Footer country={country} date={date} />
    </Container>
  )
}

export default Content
