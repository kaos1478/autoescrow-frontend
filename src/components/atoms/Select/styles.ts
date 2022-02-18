import styled, { css } from 'styled-components'

import { ISelectProps } from '.'

interface IContainerProps
  extends Omit<ISelectProps, 'options' | 'handleChange'> {
  active: boolean
}

const activeStyle = css`
  border-color: ${props => props.theme.colors.primary};
`

export const Container = styled.select<IContainerProps>`
  background-color: ${props => props.theme.colors.input.background};
  border-radius: ${props => props.theme.sizes.input.borderRadius};
  border: 1px solid ${props => props.theme.colors.input.border};
  color: ${props => props.theme.colors.text.light};
  font-size: ${props => props.theme.sizes.font.medium};
  height: ${props => props.theme.sizes.input.height};
  margin: ${props => props.margin};
  outline: none;
  overflow: hidden;
  padding: 0 0.5rem;
  transition: all 0.5s;

  &::placeholder {
    color: ${props => props.theme.colors.input.placeHolder};
    font-size: ${props => props.theme.sizes.font.medium};
  }

  ${props => props.active && activeStyle};
`
