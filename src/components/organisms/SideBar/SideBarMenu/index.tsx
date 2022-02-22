// External libs

// Assets
import {
  ActivitySVG,
  BookOpenSVG,
  HelpCircleSVG,
  SearchSVG,
  UserSVG
} from '@/assets/svgs'

// Componentes
import SideBarMenuItem from '@/components/molecules/SideBarMenuItem'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const SideBarMenu: React.FC = () => {
  const MENU_ITEM_LIST = [
    {
      icon: ActivitySVG,
      link: '/LastEscrows',
      title: 'Last Escrows'
    },
    {
      icon: BookOpenSVG,
      link: '/MyEscrows',
      title: 'My Escrows'
    },
    {
      icon: UserSVG,
      link: '/Profile',
      title: 'My Profile'
    },
    {
      icon: SearchSVG,
      link: '/FindByID',
      title: 'Find by ID'
    },
    {
      icon: HelpCircleSVG,
      link: '/Help',
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
