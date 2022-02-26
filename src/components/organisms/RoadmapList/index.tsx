// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import RoadmapListItem from '@/components/molecules/RoadmapListItem'
import * as Styled from './styles'

// Services

// Types

const RoadmapList: React.FC = () => {
  const roadmapItems = [
    {
      title: '1. Add internal chat (for greater anonymity)',
      subItems: []
    },
    {
      title: '2. Finish help page',
      subItems: []
    },
    {
      title: '3. Create SafeEscrow V2',
      subItems: [
        '1. Add ERC20 escrows',
        '2. Add marketplace listing',
        '3. Create SafeEscrow Token',
        '4. Possible airdrop'
      ]
    }
  ]

  return (
    <Styled.Container>
      <Typography as="heading1">Roadmap</Typography>
      <Styled.List>
        {roadmapItems.map(item => (
          <RoadmapListItem key={item.title} item={item} />
        ))}
      </Styled.List>
    </Styled.Container>
  )
}

export default RoadmapList
