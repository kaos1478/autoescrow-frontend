// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import Typography from '@/components/atoms/Typography'
import SideBarMenu from '@/components/organisms/SideBar/SideBarMenu'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const SideBar: React.FC = () => {
  return (
    <Styled.Container>
      <Typography as="heading1" marginTop="2rem" marginBottom="2rem">
        AutoEscrow
      </Typography>
      <Button color="default" marginBottom="2rem">
        New Escrow
      </Button>
      <SideBarMenu />
    </Styled.Container>
  )
}

export default SideBar
