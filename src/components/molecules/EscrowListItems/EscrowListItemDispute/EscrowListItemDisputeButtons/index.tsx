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
}

const EscrowListItemPaidButtons: React.FC<IEscrowListItemPaidButtonsProps> = ({
  id
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
        color="danger"
        disabled
        marginRight="0.5rem"
        onClick={disputeEscrow}
      >
        Open Dispute
      </Button>
      <Button
        color="success"
        disabled
        marginRight="0.5rem"
        onClick={confirmEscrow}
      >
        Confirm
      </Button>
    </EscrowListItemButtonsWrapper>
  )
}

export default EscrowListItemPaidButtons
