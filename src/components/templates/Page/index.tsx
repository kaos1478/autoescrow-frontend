// External libs
import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'

// Assets

// Componentes
import LoaderIndicator from '@/components/atoms/LoaderIndicator'
import Typography from '@/components/atoms/Typography'
import { ICardListItem } from '@/components/molecules/CardListItem'
import CardList from '@/components/organisms/CardList'

// Subcomponentes and style
import * as Styled from './styles'
import { useAppSelector } from '@/redux/store'

// Services

// Types
interface IPageProps {
  addons?: () => void
  cards?: ICardListItem[]
  loading?: boolean
  title?: string
}

const Page: React.FC<IPageProps> = ({
  addons,
  cards,
  loading,
  title,
  children
}) => {
  const { account, chainId } = useWeb3React()
  const { selected } = useAppSelector(state => state.networks)

  const getContent = useMemo(() => {
    if (account && chainId === parseInt(selected)) {
      return children
    } else if (account && chainId !== parseInt(selected)) {
      return (
        <Typography as="heading2" align="center" marginTop="2rem">
          Wrong Network! check the connected network is the same as the
          selected!
        </Typography>
      )
    } else {
      return (
        <Typography as="heading2" align="center" marginTop="2rem">
          Connect your walllet to load!
        </Typography>
      )
    }
  }, [account, children, chainId, selected])

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
        {getContent}
      </Styled.Content>
    </Styled.Container>
  )
}

export default Page
