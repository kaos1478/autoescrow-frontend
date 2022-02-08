// External libs

// Assets

// Componentes

// Subcomponentes and style
import { InputHTMLAttributes, useState } from 'react'
import * as Styled from './styles'

// Services

// Types
export interface IINputProps extends InputHTMLAttributes<HTMLInputElement> {
  margin?: string
}

const Input: React.FC<IINputProps> = ({
  onFocus = () => {},
  onBlur = () => {},
  margin = 'inherit',
  ...rest
}) => {
  const [active, setActive] = useState<boolean>(false)

  const handleOnFocus = (e: any) => {
    onFocus(e)
    setActive(true)
  }

  const handleOnBlur = (e: any) => {
    onBlur(e)
    setActive(false)
  }

  return (
    <Styled.Container
      active={active}
      margin={margin}
      onBlur={handleOnBlur}
      onFocus={handleOnFocus}
      {...rest}
    />
  )
}

export default Input
