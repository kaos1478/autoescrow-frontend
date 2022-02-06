// External libs

// Assets

// Componentes

// Subcomponentes and style
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import * as Styled from './styles'
import { colorVariants } from '@/components/atoms/Button/styles'

// Services

// Types
interface IFrameProps {
  title: string
  isOpen: boolean
  btns: {
    text: string
    handleClick: () => void
    color: keyof typeof colorVariants
  }[]
}

const Frame: React.FC<IFrameProps> = ({ title, isOpen, btns, children }) => {
  return (
    <Styled.Container isOpen={isOpen}>
      <Styled.Content isOpen={isOpen}>
        <Styled.Header>
          <Typography as="heading1">{title}</Typography>
        </Styled.Header>
        <Styled.Body>{children}</Styled.Body>
        <Styled.Footer>
          {btns.map(btn => (
            <Button color={btn.color} key={btn.text} onClick={btn.handleClick}>
              {btn.text}
            </Button>
          ))}
        </Styled.Footer>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Frame
