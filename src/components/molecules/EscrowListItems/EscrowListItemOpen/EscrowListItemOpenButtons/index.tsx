// External libs

// Assets

// Componentes
import Button from '@/components/atoms/Button'

// Subcomponentes and style
import { EscrowListItemButtonsWrapper } from '@/components/molecules/EscrowListItems/Commons'

// Services
import { toWei } from '@/utils/contract'
import { useAsyncValidator } from '@/hooks/useContractMiddleware'
import useAutoEscrowContract from '@/hooks/useAutoEscrowContract'
import { useWeb3React } from '@web3-react/core'

// Types
interface IEscrowListItemOpenButtonsProps {
  amount: number
  id: number
  sender: string
}

const EscrowListItemOpenButtons: React.FC<IEscrowListItemOpenButtonsProps> = ({
  amount,
  id,
  sender
}) => {
  const { account } = useWeb3React()
  const contract = useAutoEscrowContract()
  const asyncValidator = useAsyncValidator()

  const payEscrow = async () => {
    asyncValidator(
      contract?.payEscrow(id, { value: toWei(amount) }),
      'Waiting for confirmation!',
      'Payment submitted to the blockchain!'
    )
  }

  const deleteEscrow = async () => {
    asyncValidator(
      contract?.deleteEscrow(id),
      'Delete submitted to the blockchain!',
      'Waiting for confirmation!'
    )
  }

  return (
    <EscrowListItemButtonsWrapper>
      <Button
        onClick={payEscrow}
        color="default"
        marginRight="0.5rem"
        disabled={sender === account}
      >
        Pay
      </Button>
      <Button
        onClick={deleteEscrow}
        color="warning"
        disabled={sender !== account}
      >
        Delete
      </Button>
    </EscrowListItemButtonsWrapper>
  )
}

export default EscrowListItemOpenButtons
