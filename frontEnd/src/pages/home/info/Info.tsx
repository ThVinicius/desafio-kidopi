import { FC } from 'react'
import { formatNumber } from '../../../utils/formatNumber'
import { Box, Container, SubTitle, Title } from './infoStyle'

interface IProps {
  country: string
  dead: number
  confirmed: number
}

const Info: FC<IProps> = ({ country, confirmed, dead }) => {
  return (
    <Container>
      <Box>
        <Title>Legenda</Title>
        <SubTitle>
          Confirmados: Pessoas que foram infectadas pela COVID-19
        </SubTitle>
        <SubTitle>Mortos: Pessoas que morreram pela COVID-19</SubTitle>
      </Box>
      <Box>
        <Title>{country}</Title>
        <span>
          <SubTitle>Total de confirmados</SubTitle>
          <p>{formatNumber(confirmed)}</p>
        </span>
        <span>
          <SubTitle>Total de mortes</SubTitle>
          <p>{formatNumber(dead)}</p>
        </span>
      </Box>
    </Container>
  )
}

export default Info
