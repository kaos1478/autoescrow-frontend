// External libs

// Assets

// Componentes

// Subcomponentes and style
import LoaderIndicator from '@/components/atoms/LoaderIndicator'
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
          <Styled.Header>
            <Styled.Title>
              <Typography as="heading1" marginRight="1rem">
                {title}
              </Typography>
              {loading && <LoaderIndicator />}
            </Styled.Title>
            {addons && addons()}
          </Styled.Header>
        )}
        {children}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Page
