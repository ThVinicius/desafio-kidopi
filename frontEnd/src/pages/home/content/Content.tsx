import { FC } from 'react'
import Loading from '../../../components/loading/Loading'
import { useGetCountryInfo } from '../../../hooks/apiCovidKidopi/useGetCountryInfo'
import { formatInfo } from '../../../utils/formatNumber'
import Footer from '../footer/Footer'
import Form from '../form/Form'
import Info from '../info/Info'
import Table from '../table/Table'
import { Box, Container, Span, Title } from './contentStyle'

const Content: FC = () => {
  const { fetch, info, setInfo, country, confirmed, dead, date, loading } =
    useGetCountryInfo()

  return (
    <Container>
      <Span>
        <Title>Dados de casos confirmados e óbitos por COVID-19</Title>
        <Form {...{ fetch, setInfo }} />
        {info !== null ? (
          <Box show={info !== null}>
            <Info country={country!} confirmed={confirmed!} dead={dead!} />
            <Table data={formatInfo(info!)} />
          </Box>
        ) : (
          <Loading loading={loading} />
        )}
      </Span>
      <Footer country={country} date={date} />
    </Container>
  )
}

export default Content
