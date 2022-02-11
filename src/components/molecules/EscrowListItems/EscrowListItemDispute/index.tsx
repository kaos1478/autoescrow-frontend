// External libs
import { IPaidsAsPayer, IPaidsAsSender } from '@/types/autoEscrowEscrowsTypes'
import { toEther } from '@/utils/contract'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import { EscrowListItemColumn, EscrowListItemFrame } from '../Commons'
import EscrowListItemDisputeButtons from './EscrowListItemDisputeButtons'

// Subcomponentes and style

// Services

// Types
interface IEscrowListItemProps {
  escrow: IPaidsAsPayer | IPaidsAsSender
}

const EscrowListItemDispute: React.FC<IEscrowListItemProps> = ({ escrow }) => {
  const { account } = useWeb3React()

  const parsedEscrow = {
    ammount: toEther(escrow.weiAmount),
    id: escrow.id,
    payer: escrow.payer,
    sender: escrow.sender,
    timeStamp: new Date(escrow.timeStamp * 1000)
  }

  return (
    <EscrowListItemFrame status="dispute">
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
      <EscrowListItemColumn
        width="7rem"
        title="Payer"
        value={parsedEscrow.payer === account ? 'You' : parsedEscrow.payer}
      />
      <EscrowListItemColumn width="10rem" title="Status" value="Paid" />
      <EscrowListItemDisputeButtons
        id={parsedEscrow.id}
        sender={parsedEscrow.sender}
        payer={parsedEscrow.payer}
      />
    </EscrowListItemFrame>
  )
}

export default EscrowListItemDispute
