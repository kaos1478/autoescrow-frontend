// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'

// Subcomponentes and style
import { EscrowListItemButtonsWrapper } from '@/components/molecules/EscrowListItems/Commons'

// Services
import { useAsyncValidator } from '@/hooks/useContractMiddleware'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'

// Types
interface IEscrowListItemPaidButtonsProps {
  id: number
  payer: string
  sender: string
}

const EscrowListItemPaidButtons: React.FC<IEscrowListItemPaidButtonsProps> = ({
  id,
  sender,
  payer
}) => {
  const contract = useAutoEscrowContract()
  const asyncValidator = useAsyncValidator()

  const disputeEscrow = async () => {
    asyncValidator(
      contract?.disputeEscrow(id),
      'Dispute submitted to the blockchain!',
      'Waiting for confirmation!'
    )
  }

  const confirmEscrow = async () => {
    asyncValidator(
      contract?.finishEscrow(id),
      'Confirm submitted to the blockchain!',
      'Waiting for confirmation!'
    )
  }

  return (
    <EscrowListItemButtonsWrapper>
      <Button
        onClick={disputeEscrow}
        color="danger"
        marginRight="0.5rem"
        disabled
      >
        Open Dispute
      </Button>
      <Button
        onClick={confirmEscrow}
        color="success"
        marginRight="0.5rem"
        disabled
      >
        Confirm
      </Button>
    </EscrowListItemButtonsWrapper>
  )
}

export default EscrowListItemPaidButtons
