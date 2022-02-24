// External libs
import { ChangeEvent, SelectHTMLAttributes, useState } from 'react'

// Assets

// Componentes

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types
export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
  margin?: string
  options: { value: string; text: string; active?: boolean }[]
}

const Select: React.FC<ISelectProps> = ({
  handleChange = () => {},
  margin = 'inherit',
  onBlur = () => {},
  onFocus = () => {},
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
      onChange={handleChange}
      onFocus={handleOnFocus}
      {...rest}
    >
      {options.map(option => (
        <option
          key={`${option.value}-${option.text}`}
          value={option.value}
          disabled={!option.active || false}
        >
          {option.text}
        </option>
      ))}
    </Styled.Container>
  )
}

export default Select
