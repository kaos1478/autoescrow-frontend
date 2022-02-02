// External libs

// Assets

// Componentes

// Subcomponentes and style
import CardListItem, {
  ICardListItem
} from '@/components/molecules/CardListItem'
import * as Styled from './styles'

// Services

// Types
export interface ICardListProps {
  cards: ICardListItem[]
}

const CardList: React.FC<ICardListProps> = ({ cards }) => {
  return (
    <Styled.Container>
      {cards.map(item => (
        <CardListItem key={item.title} card={item} />
      ))}
    </Styled.Container>
  )
}

export default CardList
