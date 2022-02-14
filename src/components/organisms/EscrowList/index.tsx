// External libs
import { memo } from 'react'

// Assets

// Componentes

// Subcomponentes and style
import EscrowListItemDispute from '@/components/molecules/EscrowListItems/EscrowListItemDispute'
import EscrowListItemOpen from '@/components/molecules/EscrowListItems/EscrowListItemOpen'
import EscrowListItemPaid from '@/components/molecules/EscrowListItems/EscrowListItemPaid'
import * as Styled from './styles'

// Services

// Types
interface IEscrowListProps {
  escrows: any[] | undefined
  status: 'open' | 'paid' | 'dispute'
}

const EscrowList: React.FC<IEscrowListProps> = ({ escrows, status }) => {
  const getEscrowListItem = (key: any, escrow: any) => {
    console.log(status)
    if (status === 'open') {
      return <EscrowListItemOpen key={key} escrow={escrow} />
    } else if (status === 'paid') {
      return <EscrowListItemPaid key={key} escrow={escrow} />
    } else {
      return <EscrowListItemDispute key={key} escrow={escrow} />
    }
  }

  return (
    <Styled.Container>
      {escrows?.map(item => getEscrowListItem(item.id, item))}
    </Styled.Container>
  )
}

export default memo(EscrowList)
