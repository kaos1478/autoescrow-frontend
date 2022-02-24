// External libs
import { Ellipse } from '@/utils/text'
import { IOpensAsSender } from '@/types/autoEscrowEscrowsTypes'
import { toEther } from '@/utils/contract'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import EscrowListItemOpenButtons from './EscrowListItemOpenButtons'
import { EscrowListItemColumn, EscrowListItemFrame } from '../Commons'
import { useAppSelector } from '@/redux/store'

// Subcomponentes and style

// Services

// Types
interface IEscrowListItemProps {
  escrow: IOpensAsSender
}

const EscrowListItemOpen: React.FC<IEscrowListItemProps> = ({ escrow }) => {
  const { account } = useWeb3React()

  const { selected, networks } = useAppSelector(state => state.networks)

  const selectedNetwork = networks.find(network => network.value === selected)

  const parsedEscrow = {
    ammount: toEther(escrow.weiAmount),
    id: escrow.id,
    sender: escrow.sender,
    timeStamp: new Date(escrow.timeStamp * 1000)
  }

  return (
    <EscrowListItemFrame status="open">
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
      <EscrowListItemColumn width="6rem" title="Payer" value="None" />
      <EscrowListItemColumn width="10rem" title="Status" value={'Open'} />
      <EscrowListItemOpenButtons
        amount={parsedEscrow.ammount}
        id={parsedEscrow.id}
        sender={parsedEscrow.sender}
      />
    </EscrowListItemFrame>
  )
}

export default EscrowListItemOpen
