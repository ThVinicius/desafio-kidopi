import styled from 'styled-components'

const Container = styled.aside`
  position: sticky;
  top: 0;
  left: 0;
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 600px) {
    width: 100%;
    margin: 15px 0;
    position: static;
  }
`

const Title = styled.h1`
  text-align: center;
  font: normal 700 1.5rem 'Lato', sans-serif;
`

const Box = styled.span`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const SubTitle = styled.h2`
  font: normal 500 1.1rem 'Lato', sans-serif;
`

export { Container, Title, SubTitle, Box }
