// External libs

// Assets

// Componentes

// Subcomponentes and style
import { InputHTMLAttributes, useState } from 'react'
import * as Styled from './styles'

// Services

// Types
export interface IINputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<IINputProps> = ({
  onFocus = () => {},
  onBlur = () => {},
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
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      active={active}
      {...rest}
    />
  )
}

export default Input
