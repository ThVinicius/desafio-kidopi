import { FC } from 'react'
import logo from '../../assets/images/logo_kidopi.png'
import { Container, LogoContainer, Menu } from './headerStyle'
import Tab from './Tab'

const Header: FC = () => {
  return (
    <Container>
      <LogoContainer>
        <h1>Desafio</h1>
        <img src={logo} alt="logo kidopi" />
      </LogoContainer>
      <Menu>
        <Tab label="Case 1" path="/" />
        <Tab label="Case 2" path="/diff" />
      </Menu>
    </Container>
  )
}

export default Header
