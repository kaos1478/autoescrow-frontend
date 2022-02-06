// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'

// Subcomponentes and style
import * as Styled from './styles'

// Services
import { toWei } from '@/utils/contract'
import { useAsyncValidator } from '@/hooks/useContractMiddleware'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'

// Types
interface IEscrowListItemButtonsProps {
  amount: number
  id: number
}

const EscrowListItemButtons: React.FC<IEscrowListItemButtonsProps> = ({
  amount,
  id
}) => {
  const contract = useAutoEscrowContract()
  const asyncValidator = useAsyncValidator()

  const payEscrow = async () => {
    asyncValidator(
      contract?.payEscrow(id, { value: toWei(amount) }),
      'Payment submitted to the blockchain!',
      'Waiting for confirmation!'
    )
  }

  return (
    <Styled.Container>
      <Button onClick={payEscrow} color="default">
        Pay
      </Button>
    </Styled.Container>
  )
}

export default EscrowListItemButtons
