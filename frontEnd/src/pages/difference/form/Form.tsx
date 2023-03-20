import { Dispatch, FC, SetStateAction } from 'react'
import { Label } from '../../home/form/formStyle'
import { Container, Select } from './formStyle'

interface IProps {
  index: number
  countryOptions: string[] | undefined
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const Form: FC<IProps> = ({ index, countryOptions, value, setValue }) => {
  return (
    <Container>
      <Label htmlFor={`selectOpcoes-${index}`}>
        Selecione o {index}° país:
      </Label>
      <Select
        id={`selectOpcoes-${index}`}
        name={`selectOpcoes-${index}`}
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        <option value="" disabled selected>
          Selecione uma opção
        </option>
        {countryOptions?.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </Select>
    </Container>
  )
}

export default Form
