// External libs
import { ethers } from 'ethers'
import web3 from 'web3'

// Assets

// Componentes

// Subcomponentes and style
import EscrowListItemButtons from './EscrowListItemButtons'
import EscrowListItemColumn from './EscrowListItemColumn'
import * as Styled from './styles'

// Services

// Types
export interface IEscrowListItem {
  id: number
  ammount: number
  owner: string
  payer: string
  status: string
}

interface IEscrowListItemProps {
  escrow: IEscrowListItem
}

const EscrowListItem: React.FC<IEscrowListItemProps> = ({ escrow }) => {
  const parsedEscrows = {
    sender: escrow[0],
    id: web3.utils.toNumber(escrow[1]), // web3.utils.hexToNumber(web3.utils.fromDecimal(escrow[1])),
    ammount: ethers.utils.formatEther(escrow[2]),
    timeStamp: 'timeStamp',
    payer: null
  }

  console.log(parsedEscrows.id)

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
        ammount={web3.utils.toWei(ethers.utils.formatEther(escrow[2]))}
      />
    </Styled.Container>
  )
}

export default EscrowListItem
