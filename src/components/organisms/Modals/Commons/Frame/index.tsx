// External libs

// Assets

// Componentes

// Subcomponentes and style
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import { useAppDispatch } from '@/redux/store'
import * as Styled from './styles'

// Services
import { setOpen } from '@/redux/slicers/modalSlice'

// Types

const Frame: React.FC = ({ children }) => {
  const dispath = useAppDispatch()

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Header>
          <Typography as="heading1">Create Escrow</Typography>
        </Styled.Header>
        <Styled.Body>{children}</Styled.Body>
        <Styled.Footer>
          <Button color="danger" onClick={() => dispath(setOpen(false))}>
            Cancel
          </Button>
          <Button color="success">Create</Button>
        </Styled.Footer>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Frame
