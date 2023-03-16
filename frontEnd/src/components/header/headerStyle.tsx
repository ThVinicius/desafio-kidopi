import styled from 'styled-components'

const Container = styled.header`
  width: 100vw;
  height: 80px;
  padding: 0 20px;
  display: flex;
`

const LogoContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;

  h1 {
    font: normal 700 40px 'Lato', sans-serif;
    color: #808080;
  }
`

export { Container, LogoContainer }
