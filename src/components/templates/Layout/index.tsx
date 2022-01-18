// External libs
import SideBar from '@/components/organisms/SideBar'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Layout: React.FC = ({ children }) => {
  return (
    <Styled.Container>
      <SideBar />
      {children}
    </Styled.Container>
  )
}

export default Layout
