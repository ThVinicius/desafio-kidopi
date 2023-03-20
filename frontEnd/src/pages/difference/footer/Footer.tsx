import { FC } from 'react'
import { Container, Title, Info } from './footerStyle'

interface IProps {
  firstCountry: string
  date: string
  secondCountry: string
}

const Footer: FC<IProps> = ({ firstCountry, date, secondCountry }) => {
  return (
    <Container>
      {date.length === 0 ? (
        <Title>Informações adicionais serão exibidos aqui!</Title>
      ) : (
        <Info>
          <span>
            <h2>País pesquisado: {firstCountry}</h2>
            <h3>Data da pesquisa: {date}</h3>
          </span>
          <span>
            <h2>País pesquisado: {secondCountry}</h2>
            <h3>Data da pesquisa: {date}</h3>
          </span>
        </Info>
      )}
    </Container>
  )
}

export default Footer
