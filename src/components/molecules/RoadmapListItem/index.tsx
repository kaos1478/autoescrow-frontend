// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import RoadmapListSubList from './RoadmapListSubList'
import * as Styled from './styles'

// Services

// Types
interface IRoadmapListItemProps {
  item: {
    title: string
    subItems: string[]
  }
}

const RoadmapListItem: React.FC<IRoadmapListItemProps> = ({ item }) => {
  return (
    <Styled.Container key={item.title}>
      <Typography as="body1">{item.title}</Typography>
      <RoadmapListSubList subItems={item.subItems} />
    </Styled.Container>
  )
}

export default RoadmapListItem
