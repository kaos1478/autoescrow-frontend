import styled, { css } from 'styled-components'
import { IButtonProps } from '.'

export const colorVariants = {
  default: css`
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.button.default.primary},
      ${props => props.theme.colors.button.default.secondary}
    );
    border-radius: ${props => props.theme.sizes.button.borderRadius};
    color: ${props => props.theme.colors.button.default.text};
    font-size: ${props => props.theme.sizes.font.small};
  `,
  defaultReverse: css`
    background-color: transparent;
    border-radius: ${props => props.theme.sizes.button.borderRadius};
    border: 1px solid ${props => props.theme.colors.button.default.primary};
    color: ${props => props.theme.colors.button.default.primary};
    font-size: ${props => props.theme.sizes.font.small};
  `,
  success: css`
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.button.success.lightGreen},
      ${props => props.theme.colors.button.success.darkGreen}
    );
    border-radius: ${props => props.theme.sizes.button.borderRadius};
    color: ${props => props.theme.colors.button.success.text};
  `,
  warning: css`
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.button.warning.lightOrange},
      ${props => props.theme.colors.button.warning.darkOrange}
    );
    border-radius: ${props => props.theme.sizes.button.borderRadius};
    color: ${props => props.theme.colors.button.warning.text};
  `,
  danger: css`
    background: linear-gradient(
      90deg,
      ${props => props.theme.colors.button.danger.lightRed} 0%,
      ${props => props.theme.colors.button.danger.darkRed} 100%
    );
    border-radius: ${props => props.theme.sizes.button.borderRadius};
    color: ${props => props.theme.colors.button.danger.text};
  `
}

export const Container = styled.button<IButtonProps>`
  border: none;
  font-size: ${props => props.theme.sizes.font.small};
  height: ${props => props.theme.sizes.button.height};
  min-width: ${props => props.theme.sizes.button.minWidth};
  outline: none !important;
  transition: all 0.5s;

  &:hover {
    filter: brightness(1.3);
  }

  ${props => colorVariants[props.color]}
`
