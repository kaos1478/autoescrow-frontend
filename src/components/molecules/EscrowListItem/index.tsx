// External libs
import { ethers } from 'ethers'

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
    ammount: escrowObj.weiAmount.toString(10),
    timeStamp: new Date(parseInt(escrowObj.timeStamp) * 1000),
    payer: null
  }
  console.log('escrowObj: ', parsedEscrows)

  console.log(parsedEscrows.id)

  return (
    <Styled.Container>
      <EscrowListItemColumn width="5rem" title="ID" value={parsedEscrows.id} />
      <EscrowListItemColumn
        width="10rem"
        title="Ammount"
        value={ethers.utils.formatEther(parsedEscrows.ammount)}
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
        ammount={parsedEscrows.ammount}
      />
    </Styled.Container>
  )
}

export default EscrowListItem
