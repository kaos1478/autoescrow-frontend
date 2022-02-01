// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '../../../atoms/Typography'
import * as Styled from './styles'

// Services

// Utils
import { Ellipse } from '@/utils/text'

// Types
export interface IEscrowListItemColumnProps {
  title: string
  value: string | number
  width: string
  ellipse?: boolean
}

const EscrowListItemColumn: React.FC<IEscrowListItemColumnProps> = ({
  title,
  value,
  width,
  ellipse
}) => {
  return (
    <Styled.Container width={width}>
      <Typography as="body1">{title}</Typography>
      <Typography as="body2">
        {ellipse ? Ellipse(value.toString()) : value}
      </Typography>
    </Styled.Container>
  )
}

export default EscrowListItemColumn
