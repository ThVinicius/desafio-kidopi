import { ChangeEvent, FC } from 'react'
import { Container, Label, Select } from './formStyle'

interface IProps {
  fetch: (country: string) => void
}

const Form: FC<IProps> = ({ fetch }) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    fetch(value)
  }

  return (
    <Container>
      <Label htmlFor="selectOpcoes">Selecione um país:</Label>
      <Select
        id="selectOpcoes"
        name="selectOpcoes"
        onChange={handleOnChange}
        defaultValue=""
      >
        <option value="" disabled>
          Selecione uma opção
        </option>
        <option value="Australia">Australia</option>
        <option value="Brazil">Brazil</option>
        <option value="Canada">Canada</option>
      </Select>
    </Container>
  )
}

export default Form
