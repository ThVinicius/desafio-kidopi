import styled from 'styled-components'

const Container = styled.aside`
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
