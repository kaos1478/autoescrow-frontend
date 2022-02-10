// External libs

// Assets

// Componentes

// Subcomponentes and style
import EscrowListItem from '@/components/molecules/EscrowListItem'
import * as Styled from './styles'

// Services

// Types
interface IEscrowListProps {
  escrows: any[] | undefined
}

const EscrowList: React.FC<IEscrowListProps> = ({ escrows }) => {
  return (
    <Styled.Container>
      {escrows?.map(item => (
        <EscrowListItem key={item.id} escrow={item} />
      ))}
    </Styled.Container>
  )
}

export default EscrowList
