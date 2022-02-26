// External libs

// Assets

// Componentes

// Subcomponentes and style
import RoadmapListSubListItem from './RoadmapListSubListItem'
import * as Styled from './styles'

// Services

// Types
interface IRoadmapListSubListProps {
  subItems: string[]
}

const RoadmapListSubList: React.FC<IRoadmapListSubListProps> = ({
  subItems
}) => {
  return (
    <Styled.Container>
      {subItems.map(subItem => (
        <RoadmapListSubListItem key={subItem} subItem={subItem} />
      ))}
    </Styled.Container>
  )
}

export default RoadmapListSubList
