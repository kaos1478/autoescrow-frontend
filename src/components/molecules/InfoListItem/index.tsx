// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import { useState } from 'react'
import * as Styled from './styles'

// Services

// Types
export interface IInfoListItemProps {
  title: string
  description: string
}

const InfoListItem: React.FC<IInfoListItemProps> = ({ title, description }) => {
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <Styled.Container>
      <Styled.Header onClick={() => setToggle(!toggle)}>
        <Typography as="heading2">{title}</Typography>
      </Styled.Header>
      <Styled.Body toggle={toggle}>
        <Typography as="body3">{description}</Typography>
      </Styled.Body>
    </Styled.Container>
  )
}

export default InfoListItem
