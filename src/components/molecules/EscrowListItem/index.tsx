// External libs
import { toEther } from '@/utils/contract'

// Assets

// Componentes

// Subcomponentes and style
import EscrowListItemButtons from './EscrowListItemButtons'
import EscrowListItemColumn from './EscrowListItemColumn'
import * as Styled from './styles'

// Services

// Types
export interface IEscrowListItem {
  id: string
  sender: string
  timeStamp: string
  weiAmount: number
}

interface IEscrowListItemProps {
  escrow: IEscrowListItem
}

const EscrowListItem: React.FC<IEscrowListItemProps> = ({ escrow }) => {
  const escrowObj = { ...escrow }
  const parsedEscrows = {
    sender: escrowObj.sender,
    id: parseInt(escrowObj.id), // web3.utils.hexToNumber(web3.utils.fromDecimal(escrow[1])),
    ammount: toEther(escrowObj.weiAmount),
    timeStamp: new Date(parseInt(escrowObj.timeStamp) * 1000),
    payer: null
  }

  return (
    <Styled.Container>
      <EscrowListItemColumn width="5rem" title="ID" value={parsedEscrows.id} />
      <EscrowListItemColumn
        width="10rem"
        title="Ammount"
        value={parsedEscrows.ammount}
      />
      <EscrowListItemColumn
        width="20rem"
        title="Owner"
        value={parsedEscrows.sender}
        ellipse
      />
      <EscrowListItemColumn
        width="20rem"
        title="Payer"
        value={parsedEscrows.payer || 'None'}
        ellipse
      />
      <EscrowListItemColumn width="10rem" title="Status" value={'Open'} />
      <EscrowListItemButtons
        id={parsedEscrows.id}
        amount={parsedEscrows.ammount}
      />
    </Styled.Container>
  )
}

export default EscrowListItem
