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
    font: normal 700 2.5rem 'Lato', sans-serif;
    color: #808080;
  }

  @media (max-width: 600px) {
    img {
      height: 50px;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
`

export { Container, LogoContainer }
