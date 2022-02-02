// External libs

// Assets

// Componentes
import SideBar from '@/components/organisms/SideBar'
import TopBar from '@/components/organisms/TopBar'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Layout: React.FC = ({ children }) => {
  return (
    <Styled.Container>
      <SideBar />
      <Styled.Content>
        <TopBar />
        {children}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Layout
