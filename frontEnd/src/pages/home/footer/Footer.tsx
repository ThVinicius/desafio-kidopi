import { FC } from 'react'
import { Container, Title, Info } from './footerStyle'

interface IProps {
  date: string
  country: string
}

const Footer: FC<IProps> = ({ country, date }) => {
  return (
    <Container>
      {country.length === 0 ? (
        <Title>Informações adicionais serão exibidos aqui!</Title>
      ) : (
        <Info>
          <h2>País pesquisado: {country}</h2>
          <h3>Data da pesquisa: {date}</h3>
        </Info>
      )}
    </Container>
  )
}

export default Footer
