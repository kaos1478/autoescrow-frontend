// External libs
import { FunctionComponent } from 'react'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface ITopBarMenuItemProps {
  icon: FunctionComponent
}

const TopBarMenuItem: React.FC<ITopBarMenuItemProps> = ({ icon: Icon }) => {
  return (
    <Styled.Container>
      <Icon />
    </Styled.Container>
  )
}

export default TopBarMenuItem
