// External libs
import { useAppSelector } from '@/redux/store'
import { IPaidsAsPayer, IPaidsAsSender } from '@/types/autoEscrowEscrowsTypes'
import { toEther } from '@/utils/contract'
import { Ellipse } from '@/utils/text'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import { EscrowListItemColumn, EscrowListItemFrame } from '../Commons'
import EscrowListItemPaidButtons from './EscrowListItemPaidButtons'

// Subcomponentes and style

// Services

// Types
interface IEscrowListItemProps {
  escrow: IPaidsAsPayer | IPaidsAsSender
}

const EscrowListItemPaid: React.FC<IEscrowListItemProps> = ({ escrow }) => {
  const { account } = useWeb3React()

  const { selected, networks } = useAppSelector(state => state.networks)

  const selectedNetwork = networks.find(network => network.value === selected)

  const parsedEscrow = {
    ammount: toEther(escrow.weiAmount),
    id: escrow.id,
    payer: escrow.payer,
    sender: escrow.sender,
    timeStamp: new Date(escrow.timeStamp * 1000)
  }

  return (
    <EscrowListItemFrame status="paid">
      <EscrowListItemColumn width="5rem" title="ID" value={parsedEscrow.id} />
      <EscrowListItemColumn
        title={`Ammount (${selectedNetwork?.coin})`}
        value={parsedEscrow.ammount}
        width="9.5rem"
      />
      <EscrowListItemColumn
        ellipse
        title="Owner"
        value={
          parsedEscrow.sender === account ? 'You' : Ellipse(parsedEscrow.sender)
        }
        width={parsedEscrow.sender === account ? '5rem' : '15rem'}
      />
      <EscrowListItemColumn
        title="Payer"
        value={
          parsedEscrow.payer === account ? 'You' : Ellipse(parsedEscrow.payer)
        }
        width={parsedEscrow.payer === account ? '5rem' : '15rem'}
      />
      <EscrowListItemColumn width="10rem" title="Status" value="Paid" />
      <EscrowListItemPaidButtons
        id={parsedEscrow.id}
        payer={parsedEscrow.payer}
        sender={parsedEscrow.sender}
      />
    </EscrowListItemFrame>
  )
}

export default EscrowListItemPaid
