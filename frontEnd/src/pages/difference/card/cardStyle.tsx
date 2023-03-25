import styled, { css } from 'styled-components'
import { fadeInWithTranslate } from '../../../assets/css/animations'

interface IContainer {
  show: boolean
}

const Container = styled.aside<IContainer>`
  width: 80%;
  padding: 20px;
  margin-top: 35px;
  margin-bottom: 30px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  opacity: ${props => (props.show ? '1' : '0')};
  transform: translateX(${props => (props.show ? '0' : '-10%')});
  animation: ${props =>
    props.show
      ? css`
          ${fadeInWithTranslate} 0.5s ease-in-out
        `
      : ''};

  h1 {
    font: normal 400 1.2rem 'Lato', sans-serif;
  }
`

const Country = styled.span`
  font-weight: 700;
`

const Diff = styled.span`
  font-weight: 700;
  color: red;
`

export { Container, Country, Diff }
