import styled from 'styled-components'

const Container = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);
  background: #ece9e6;
  background: -webkit-linear-gradient(to bottom, #ffffff, #ece9e6);
  background: linear-gradient(to bottom, #ffffff, #ece9e6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
`

const Box = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FormBox = styled.div`
  width: 100%;
  padding: 0 15px;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`

export { Container, Box, FormBox }
