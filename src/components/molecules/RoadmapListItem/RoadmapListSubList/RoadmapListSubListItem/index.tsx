// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import * as Styled from './styles'

// Services

// Types
interface IRoadmapListSubListItemProps {
  subItem: string
}

const RoadmapListSubListItem: React.FC<IRoadmapListSubListItemProps> = ({
  subItem
}) => {
  return (
    <Styled.Container>
      <Typography as="body3">{subItem}</Typography>
    </Styled.Container>
  )
}

export default RoadmapListSubListItem
