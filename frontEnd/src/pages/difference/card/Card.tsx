import { FC } from 'react'
import { Container, Country, Diff } from './cardStyle'

interface IProps {
  firstCountry: string
  secondCountry: string
  firstDeathRate: number | null
  secondDeathRate: number | null
  diffDeathRate: number | null
}

const Card: FC<IProps> = ({
  firstCountry,
  secondCountry,
  firstDeathRate,
  secondDeathRate,
  diffDeathRate
}) => {
  return (
    <>
      {diffDeathRate !== null && (
        <Container data-cy="card-diff">
          <h1>
            <Country>{firstCountry} </Country>(taxa de mortes:{' '}
            <Diff>{firstDeathRate}</Diff>)
          </h1>
          <h1>
            <Country>{secondCountry} </Country>(taxa de mortes:{' '}
            <Diff>{secondDeathRate}</Diff>)
          </h1>
          <h1>
            Diferença entre as taxas de mortes: <Diff>{diffDeathRate}</Diff>
          </h1>
        </Container>
      )}
    </>
  )
}

export default Card
