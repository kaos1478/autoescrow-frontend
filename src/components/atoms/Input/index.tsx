// External libs
import { InputHTMLAttributes, useState } from 'react'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface IINputProps extends InputHTMLAttributes<HTMLInputElement> {
  margin?: string
}

const Input: React.FC<IINputProps> = ({
  margin = 'inherit',
  onBlur = () => {},
  onFocus = () => {},
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
