import styled from 'styled-components'

const Container = styled.footer`
  width: 100vw;
  padding: 30px 0;
  background: #abbaab;
  background: -webkit-linear-gradient(to right, #ffffff, #abbaab);
  background: linear-gradient(to right, #ffffff, #abbaab);
`

const Title = styled.h1`
  font: normal 500 1.8rem 'Lato', sans-serif;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 1.1rem;
  }
`

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 9px;
  font: normal 500 1.5rem 'Lato', sans-serif;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

export { Container, Title, Info }
