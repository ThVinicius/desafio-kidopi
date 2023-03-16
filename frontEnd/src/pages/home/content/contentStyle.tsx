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
  font: normal 700 40px 'Lato', sans-serif;
  text-align: center;
`

const Box = styled.div`
  width: 100%;
  display: flex;
`

export { Container, Title, Box }
