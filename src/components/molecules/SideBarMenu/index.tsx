// External libs

// Assets
import {
  ActivitySVG,
  BookOpenSVG,
  UserSVG,
  SearchSVG,
  HelpCircleSVG
} from '@/assets/svgs'

// Componentes
import SideBarMenuItem from '@/components/atoms/SideBarMenuItem'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const SideBarMenu: React.FC = () => {
  const MENU_ITEM_LIST = [
    {
      icon: ActivitySVG,
      link: '/',
      title: 'Last Escrows'
    },
    {
      icon: BookOpenSVG,
      link: '/teste4',
      title: 'My Escrows'
    },
    {
      icon: UserSVG,
      link: '/teste3',
      title: 'My Profile'
    },
    {
      icon: SearchSVG,
      link: '/teste2',
      title: 'Find by ID'
    },
    {
      icon: HelpCircleSVG,
      link: '/teste',
      title: 'Help'
    }
  ]

  return (
    <Styled.Container>
      {MENU_ITEM_LIST.map(item => (
        <SideBarMenuItem
          icon={item.icon}
          key={item.title}
          link={item.link}
          title={item.title}
        />
      ))}
    </Styled.Container>
  )
}

export default SideBarMenu
