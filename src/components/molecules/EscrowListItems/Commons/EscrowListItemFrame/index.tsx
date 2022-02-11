// External libs

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IEscrowListItemFrame {
  status: 'open' | 'paid' | 'dispute'
}

const EscrowListItemFrame: React.FC<IEscrowListItemFrame> = ({
  children,
  ...rest
}) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default EscrowListItemFrame
