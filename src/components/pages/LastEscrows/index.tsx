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

  return (
    <Page>
      <CardList cards={cardListItems} />
    </Page>
  )
}

export default LastEscrows
