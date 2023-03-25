import styled, { css } from 'styled-components'
import { fadeInWithTranslate } from '../../../assets/css/animations'

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
`
const Span = styled.span`
  width: 100%;
  padding: 20px;
`

const Title = styled.h1`
  margin-top: 30px;
  margin-bottom: 40px;
  font: normal 700 2rem 'Lato', sans-serif;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`

interface IBox {
  show: boolean
}

const Box = styled.div<IBox>`
  width: 100%;
  display: flex;
  opacity: ${props => (props.show ? '1' : '0')};
  transform: translateX(${props => (props.show ? '0' : '-10%')});
  animation: ${props =>
    props.show
      ? css`
          ${fadeInWithTranslate} 0.5s ease-in-out
        `
      : ''};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export { Container, Title, Box, Span }
