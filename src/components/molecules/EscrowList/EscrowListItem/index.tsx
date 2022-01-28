// External libs

// Assets

// Componentes

// Subcomponentes and style
import EscrowItemListItemColumn from './EscrowItemListItemColumn'
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
  return (
    <Styled.Container>
      <EscrowItemListItemColumn width="5rem" title="ID" value={escrow.id} />
      <EscrowItemListItemColumn
        width="10rem"
        title="Ammount"
        value={escrow.ammount}
      />
      <EscrowItemListItemColumn
        width="20rem"
        title="Owner"
        value={escrow.owner}
        ellipse
      />
      <EscrowItemListItemColumn
        width="20rem"
        title="Payer"
        value={escrow.payer}
        ellipse
      />
      <EscrowItemListItemColumn
        width="10rem"
        title="Status"
        value={escrow.status}
      />
    </Styled.Container>
  )
}

export default EscrowListItem
