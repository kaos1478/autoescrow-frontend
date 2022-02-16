// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import * as Styled from './styles'

// Services

// Types
interface IInfoListGroupProps {
  title: string
}

const InfoListGroup: React.FC<IInfoListGroupProps> = ({ title, children }) => {
  return (
    <Styled.Container>
      <Styled.Header>
        <Typography as="heading1">{title}</Typography>
      </Styled.Header>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Container>
  )
}

export default InfoListGroup
