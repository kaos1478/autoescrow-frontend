// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'

// Subcomponentes and style
import { EscrowListItemButtonsWrapper } from '@/components/molecules/EscrowListItems/Commons'

// Services
import { useAsyncValidator } from '@/hooks/useContractMiddleware'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { useWeb3React } from '@web3-react/core'

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
  const { account } = useWeb3React()
  const contract = useAutoEscrowContract()
  const asyncValidator = useAsyncValidator()

  const disputeEscrow = async () => {
    asyncValidator(
      contract?.disputeEscrow(id),
      'Payment submitted to the blockchain!',
      'Waiting for confirmation!'
    )
  }

  const confirmEscrow = async () => {
    asyncValidator(
      contract?.finishEscrow(id),
      'Payment submitted to the blockchain!',
      'Waiting for confirmation!'
    )
  }

  return (
    <EscrowListItemButtonsWrapper>
      <Button
        onClick={disputeEscrow}
        color="danger"
        marginRight="0.5rem"
        disabled={!(sender === account || payer === account)}
      >
        Open Dispute
      </Button>
      <Button
        onClick={confirmEscrow}
        color="success"
        marginRight="0.5rem"
        disabled={payer !== account}
      >
        Confirm
      </Button>
    </EscrowListItemButtonsWrapper>
  )
}

export default EscrowListItemPaidButtons
