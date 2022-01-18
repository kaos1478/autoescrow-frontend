// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import TopBarMenu from '@/components/molecules/TopBarMenu'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const TopBar: React.FC = () => {
  return (
    <Styled.Container>
      <TopBarMenu />
      <Button color="defaultReverse">Connect Wallet</Button>
    </Styled.Container>
  )
}

export default TopBar
