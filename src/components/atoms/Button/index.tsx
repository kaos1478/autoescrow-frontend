// External libs
import { ButtonHTMLAttributes } from 'react'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: keyof typeof Styled.colorVariants
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
}

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Button
