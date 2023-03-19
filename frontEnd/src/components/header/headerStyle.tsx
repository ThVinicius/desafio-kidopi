import styled from 'styled-components'

const Container = styled.header`
  width: 100vw;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Menu = styled.menu`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 20px;
`

interface ILabel {
  active: boolean
}

const Label = styled.p<ILabel>`
  font: normal 700 1.1rem 'Lato', sans-serif;
  color: ${props => (props.active ? 'green' : '#000')};
  text-decoration: ${props => (props.active ? 'underline 3px' : 'none')};
  cursor: pointer;

  :hover {
    color: ${props => (props.active ? 'green' : 'orange')};
  }
`

export { Container, LogoContainer, Menu, Label }
