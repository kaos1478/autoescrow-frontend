// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
interface IEscrowListItemButtonsProps {
  ammount: any
  id: number
}

const EscrowListItemButtons: React.FC<IEscrowListItemButtonsProps> = ({ammount, id}) => {
  const contract = useAutoEscrowContract()

  const payEscrow = async () => {
    await contract?.payEscrow(id, {value: ammount})
  }

  return (
    <Styled.Container>
      <Button onClick={payEscrow} color="default">Pay</Button>
    </Styled.Container>
  )
}

export default EscrowListItemButtons
