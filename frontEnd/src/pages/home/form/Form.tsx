import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react'
import { IInfo } from '../../../hooks/apiCovidKidopi/useGetCountryInfo'
import { Container, Label, Select } from './formStyle'

interface IProps {
  fetch: (country: string) => void
  setInfo: Dispatch<SetStateAction<IInfo[] | null>>
}

const Form: FC<IProps> = ({ fetch, setInfo }) => {
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target
    setInfo(null)
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
