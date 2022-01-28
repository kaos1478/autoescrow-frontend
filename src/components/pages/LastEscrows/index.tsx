// External libs

// Assets
import {
  ShoppingCartSVG,
  ShieldSVG,
  DollarSignNotSVG,
  DollarSignSVG
} from '@/assets/svgs/index'

// Componentes
import CardList from '@/components/molecules/CardList'
import EscrowList from '@/components/molecules/EscrowList'
import Page from '@/components/templates/Page'

// Subcomponentes and style

// Services

// Types

const LastEscrows: React.FC = () => {
  const cardListItems = [
    {
      title: 'Total Escrows',
      icon: ShoppingCartSVG,
      value: '1,213'
    },
    {
      title: 'Current Tax',
      icon: ShieldSVG,
      value: '3%'
    },
    {
      title: 'Unpaid Deadline',
      icon: DollarSignNotSVG,
      value: '50 Days'
    },
    {
      title: 'Paid Deadline',
      icon: DollarSignSVG,
      value: '365 Days'
    }
  ]

  const escrowsListItems = [
    {
      id: 1,
      ammount: 0.25331,
      owner: '0xfB6Bc3997C3F8707aF020dD64fC1F7E87fd9ceb2',
      payer: '0xfB6Bc3997C3F8707aF020dD64fC1F7E87fd9ceb2',
      status: 'paid'
    },
    {
      id: 2,
      ammount: 0.25331,
      owner: '0xfB6Bc3997C3F8707aF020dD64fC1F7E87fd9ceb2',
      payer: '0xfB6Bc3997C3F8707aF020dD64fC1F7E87fd9ceb2',
      status: 'paid'
    },
    {
      id: 3,
      ammount: 0.25331,
      owner: '0xfB6Bc3997C3F8707aF020dD64fC1F7E87fd9ceb2',
      payer: '0xfB6Bc3997C3F8707aF020dD64fC1F7E87fd9ceb2',
      status: 'dispute'
    },
    {
      id: 4,
      ammount: 0.25331,
      owner: '0xfB6Bc3997C3F8707aF020dD64fC1F7E87fd9ceb2',
      payer: '',
      status: 'open'
    }
  ]

  return (
    <Page>
      <CardList cards={cardListItems} />
      <EscrowList escrows={escrowsListItems} />
    </Page>
  )
}

export default LastEscrows
