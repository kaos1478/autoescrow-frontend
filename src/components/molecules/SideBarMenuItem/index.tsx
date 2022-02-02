// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'
import Link from 'next/link'
import Typography from '@/components/atoms/Typography'
import { FunctionComponent, useMemo } from 'react'
import { useRouter } from 'next/router'

// Services

// Types
interface ISideBarMenuItemProps {
  icon: FunctionComponent
  link: string
  title: string
}

const SideBarMenuItem: React.FC<ISideBarMenuItemProps> = ({
  icon: Icon,
  link,
  title
}) => {
  const router = useRouter()

  const active = useMemo(() => {
    return router.pathname === link
  }, [link, router.pathname])

  return (
    <Link href={link} passHref>
      <Styled.Container active={active}>
        <Icon />
        <Typography
          as="body1"
          color={active ? 'primary' : 'light'}
          marginLeft="0.5rem"
        >
          {title}
        </Typography>
      </Styled.Container>
    </Link>
  )
}

export default SideBarMenuItem
