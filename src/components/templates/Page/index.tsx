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
  loading?: boolean
  addons?: () => void
}

const Page: React.FC<IPageProps> = ({
  cards,
  title,
  loading,
  addons,
  children
}) => {
  return (
    <Styled.Container>
      {cards && <CardList cards={cards} />}
      <Styled.Content>
        {title && (
          <Styled.Title>
            <Typography as="heading1">{title}</Typography>
            {loading && <Typography as="heading1"> - Fetching</Typography>}
            {addons && addons()}
          </Styled.Title>
        )}
        {children}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Page
