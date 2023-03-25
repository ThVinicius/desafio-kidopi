import { keyframes } from 'styled-components'

const fadeInWithTranslate = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export { fadeInWithTranslate }
