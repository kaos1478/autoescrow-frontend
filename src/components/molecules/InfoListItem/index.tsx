// External libs

// Assets

// Componentes
import Typography from '@/components/atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IInfoListItemProps {
  title: string
  description: string | number
}

const InfoListItem: React.FC<IInfoListItemProps> = ({ title, description }) => {
  return (
    <Styled.Container>
      <Styled.Description>
        <Typography as="body1">{title}</Typography>
      </Styled.Description>
      <Styled.Value>
        <Typography as="body1">{description}</Typography>
      </Styled.Value>
    </Styled.Container>
  )
}

export default InfoListItem
