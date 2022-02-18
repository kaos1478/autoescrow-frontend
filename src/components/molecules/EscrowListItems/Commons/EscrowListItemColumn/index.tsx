// External libs
import Link from 'next/link'
import { useWeb3React } from '@web3-react/core'

// Assets

// Componentes
import Typography from '../../../../atoms/Typography'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Utils
import { Ellipse } from '@/utils/text'

// Types
export interface IEscrowListItemColumnProps {
  ellipse?: boolean
  title: string
  value: string | number
  width?: string
}

const EscrowListItemColumn: React.FC<IEscrowListItemColumnProps> = ({
  ellipse,
  title,
  value,
  width = 'min-content'
}) => {
  const { account } = useWeb3React()

  const getContent = () => (
    <Styled.Container width={width}>
      <Typography as="body1">{title}</Typography>
      <Typography as="body2">
        {ellipse ? Ellipse(value.toString()) : value}
      </Typography>
    </Styled.Container>
  )

  if (title === 'Owner' || title === 'Sender') {
    return (
      <Link passHref href={`/Profile/${value === 'You' ? account : value}`}>
        {getContent()}
      </Link>
    )
  } else {
    return getContent()
  }
}

export default EscrowListItemColumn
