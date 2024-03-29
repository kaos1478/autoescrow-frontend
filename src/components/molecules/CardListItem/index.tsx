// External libs
import { FunctionComponent } from 'react'

// Assets

// Componentes
import Typography from '../../atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface ICardListItem {
  icon: FunctionComponent
  title: string
  value: string | number
}

interface ICardListItemProps {
  card: ICardListItem
}

const CardListItem: React.FC<ICardListItemProps> = ({ card }) => {
  const { icon: Icon } = card

  return (
    <Styled.Container>
      <Styled.IconContent>
        <Icon />
      </Styled.IconContent>
      <Styled.InfoContent>
        <Typography as="heading2">{card.title}</Typography>
        <Typography as="body2">{card.value}</Typography>
      </Styled.InfoContent>
    </Styled.Container>
  )
}

export default CardListItem
