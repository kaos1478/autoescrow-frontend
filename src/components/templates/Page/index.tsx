// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '@/components/atoms/Typography'
import { ICardListItem } from '@/components/molecules/CardListItem'
import CardList from '@/components/organisms/CardList'
import * as Styled from './styles'

// Services

// Types
interface IPageProps {
  cards?: ICardListItem[]
  title?: string
}

const Page: React.FC<IPageProps> = ({ cards, title, children }) => {
  return (
    <Styled.Container>
      {cards && <CardList cards={cards} />}
      <Styled.Content>
        {title && <Typography as="heading1">{title}</Typography>}
        {children}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Page
