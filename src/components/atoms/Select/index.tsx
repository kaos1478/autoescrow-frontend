// External libs

// Assets

// Componentes

// Subcomponentes and style
import { ChangeEvent, SelectHTMLAttributes, useState } from 'react'
import * as Styled from './styles'

// Services

// Types
export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  margin?: string
  options: { value: string; text: string }[]
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select: React.FC<ISelectProps> = ({
  onFocus = () => {},
  onBlur = () => {},
  handleChange = () => {},
  margin = 'inherit',
  options,
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
      onChange={handleChange}
      {...rest}
    >
      {options.map(option => (
        <option key={`${option.value}-${option.text}`} value={option.value}>
          {option.text}
        </option>
      ))}
    </Styled.Container>
  )
}

export default Select
