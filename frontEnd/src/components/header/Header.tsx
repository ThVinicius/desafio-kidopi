import { FC } from 'react'
import logo from '../../assets/images/logo_kidopi.png'
import { Container, LogoContainer } from './headerStyle'

const Header: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <h1>Desafio</h1>
        <img src={logo} alt="logo kidopi" />
      </LogoContainer>
    </Container>
  )
}

export default Header
