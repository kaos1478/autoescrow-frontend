// External libs
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import Button from '@/components/atoms/Button'

// Subcomponentes and style
import { EscrowListItemButtonsWrapper } from '@/components/molecules/EscrowListItems/Commons'

// Services
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { useAsyncValidator } from '@/hooks/useContractMiddleware'

// Types
interface IEscrowListItemPaidButtonsProps {
  id: number
  payer: string
  sender: string
}

const EscrowListItemPaidButtons: React.FC<IEscrowListItemPaidButtonsProps> = ({
  id,
  payer,
  sender
}) => {
  const asyncValidator = useAsyncValidator()
  const contract = useAutoEscrowContract()
  const { account } = useWeb3React()

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
        disabled={!(sender === account || payer === account)}
        marginRight="0.5rem"
        onClick={disputeEscrow}
      >
        Open Dispute
      </Button>
      <Button
        color="success"
        disabled={payer !== account}
        marginRight="0.5rem"
        onClick={confirmEscrow}
      >
        Confirm
      </Button>
    </EscrowListItemButtonsWrapper>
  )
}

export default EscrowListItemPaidButtons
