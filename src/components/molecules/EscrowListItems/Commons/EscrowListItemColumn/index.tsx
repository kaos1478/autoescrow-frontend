// External libs

// Assets

// Componentes

// Subcomponentes and style
import Typography from '../../../../atoms/Typography'
import * as Styled from './styles'

// Services

// Utils
import { Ellipse } from '@/utils/text'
import Link from 'next/link'
import { useWeb3React } from '@web3-react/core'

// Types
export interface IEscrowListItemColumnProps {
  title: string
  value: string | number
  width?: string
  ellipse?: boolean
}

const EscrowListItemColumn: React.FC<IEscrowListItemColumnProps> = ({
  title,
  value,
  width = 'min-content',
  ellipse
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
