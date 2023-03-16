import { FC } from 'react'
import { Box, Container, SubTitle, Title } from './infoStyle'

interface IProps {
  country: string
  dead: number
  confirmed: number
}

const Info: FC<IProps> = ({ country, confirmed, dead }) => {
  return (
    <Container>
      <Title>{country}</Title>
      <Box>
        <SubTitle>Total de mortes</SubTitle>
        <p>{dead}</p>
      </Box>
      <Box>
        <SubTitle>Total de confirmados</SubTitle>
        <p>{confirmed}</p>
      </Box>
    </Container>
  )
}

export default Info
