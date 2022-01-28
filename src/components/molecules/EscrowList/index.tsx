// External libs

// Assets

// Componentes

// Subcomponentes and style
import EscrowListItem, {
  IEscrowListItem
} from '@/components/molecules/EscrowList/EscrowListItem'
import * as Styled from './styles'

// Services

// Types
interface IEscrowListProps {
  escrows: IEscrowListItem[]
}

const EscrowList: React.FC<IEscrowListProps> = ({ escrows }) => {
  return (
    <Styled.Container>
      {escrows.map(item => (
        <EscrowListItem key={item.id} escrow={item} />
      ))}
    </Styled.Container>
  )
}

export default EscrowList
