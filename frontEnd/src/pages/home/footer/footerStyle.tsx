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
`

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  font: normal 500 1.5rem 'Lato', sans-serif;
`

export { Container, Title, Info }
