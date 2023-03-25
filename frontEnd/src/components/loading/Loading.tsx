import { FC } from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'
import { Container } from './loadingStyles'

interface IProps {
  loading: boolean
}

const Loading: FC<IProps> = ({ loading }) => {
  return (
    <>
      {loading && (
        <Container>
          <MagnifyingGlass height="160" width="160" />
        </Container>
      )}
    </>
  )
}

export default Loading
