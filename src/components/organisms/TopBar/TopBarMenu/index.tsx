// External libs

// Assets
import { BellSVG, MessageSquareSVG } from '@/assets/svgs'

// Componentes
import TopBarMenuItem from '@/components/molecules/TopBarMenuItem'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const TopBarMenu: React.FC = () => {
  const MENU_ITEM_LIST = [
    {
      icon: BellSVG,
      key: 'notification'
    },
    {
      icon: MessageSquareSVG,
      key: 'chat'
    }
  ]

  return (
    <Styled.Container>
      {MENU_ITEM_LIST.map(item => (
        <TopBarMenuItem icon={item.icon} key={item.key} />
      ))}
    </Styled.Container>
  )
}

export default TopBarMenu
