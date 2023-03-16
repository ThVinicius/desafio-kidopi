import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 15px;
`

const Label = styled.label`
  font: normal 400 20px 'Lato', sans-serif;
`

const Select = styled.select`
  font: normal 400 20px 'Lato', sans-serif;
`

export { Container, Label, Select }
