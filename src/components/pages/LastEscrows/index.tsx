// External libs

// Assets

// Componentes
import EscrowList from '@/components/organisms/EscrowList'
import Page from '@/components/templates/Page'

// Subcomponentes and style

// Services

// Types

const LastEscrowsPage: React.FC = () => {
  return (
    <Page title="Last Escrows">
      <EscrowList />
    </Page>
  )
}

export default LastEscrowsPage
