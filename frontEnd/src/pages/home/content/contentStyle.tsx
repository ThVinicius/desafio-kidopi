import styled from 'styled-components'

const Container = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #ece9e6;
  background: -webkit-linear-gradient(to bottom, #ffffff, #ece9e6);
  background: linear-gradient(to bottom, #ffffff, #ece9e6);

  span {
    width: 100%;
    padding: 20px;
  }
`

const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 40px;
  font: normal 700 2.5rem 'Lato', sans-serif;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.9rem;
  }
`

const Box = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export { Container, Title, Box }
