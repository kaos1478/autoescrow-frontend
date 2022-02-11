// External libs
import { IOpensAsSender } from '@/types/autoEscrowEscrowsTypes'
import { toEther } from '@/utils/contract'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import { EscrowListItemColumn, EscrowListItemFrame } from '../Commons'
import EscrowListItemOpenButtons from './EscrowListItemOpenButtons'

// Subcomponentes and style

// Services

// Types
interface IEscrowListItemProps {
  escrow: IOpensAsSender
}

const EscrowListItemOpen: React.FC<IEscrowListItemProps> = ({ escrow }) => {
  const { account } = useWeb3React()

  const parsedEscrow = {
    sender: escrow.sender,
    id: escrow.id,
    ammount: toEther(escrow.weiAmount),
    timeStamp: new Date(escrow.timeStamp * 1000)
  }

  return (
    <EscrowListItemFrame status="open">
      <EscrowListItemColumn width="5rem" title="ID" value={parsedEscrow.id} />
      <EscrowListItemColumn
        width="9rem"
        title="Ammount"
        value={parsedEscrow.ammount}
      />
      <EscrowListItemColumn
        width="15rem"
        title="Owner"
        value={parsedEscrow.sender === account ? 'You' : parsedEscrow.sender}
        ellipse
      />
      <EscrowListItemColumn width="7rem" title="Payer" value="None" />
      <EscrowListItemColumn width="10rem" title="Status" value={'Open'} />
      <EscrowListItemOpenButtons
        id={parsedEscrow.id}
        amount={parsedEscrow.ammount}
        sender={parsedEscrow.sender}
      />
    </EscrowListItemFrame>
  )
}

export default EscrowListItemOpen
