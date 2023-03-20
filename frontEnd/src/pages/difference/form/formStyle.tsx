import styled from 'styled-components'

const Container = styled.span`
  display: flex;
  gap: 5px;
`

const Select = styled.select`
  font: normal 400 1.1rem 'Lato', sans-serif;

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 520px) {
    width: 70%;
    height: 40px;
  }

  @media (max-width: 420px) {
    height: 30px;
    font-size: 0.9rem;
  }
`

export { Container, Select }
