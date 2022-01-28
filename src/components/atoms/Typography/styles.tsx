import styled, { css } from 'styled-components'

import { ITypographyProps } from './index'

interface IContainerProps extends ITypographyProps {
  styles?: string
}

export const textColors = {
  light: css`
    color: ${props => props.theme.colors.text.light};
  `,
  dark: css`
    color: ${props => props.theme.colors.text.dark};
  `,
  primary: css`
    color: ${props => props.theme.colors.primary};
  `
}

export const parsedTypographys = {
  heading1: {
    tag: 'h1',
    style: css`
      font-size: ${props => props.theme.sizes.font.large};
      font-weight: 400;
      color: ${props => props.theme.colors.text.light};
    `
  },
  heading2: {
    tag: 'h2',
    style: css`
      font-size: ${props => props.theme.sizes.font.medium};
      font-weight: 400;
      color: ${props => props.theme.colors.text.light};
    `
  },
  body1: {
    tag: 'span',
    style: css`
      font-size: ${props => props.theme.sizes.font.medium};
      font-weight: 400;
      color: ${props => props.theme.colors.text.light};
    `
  },
  body2: {
    tag: 'span',
    style: css`
      font-size: ${props => props.theme.sizes.font.ultraLarge};
      font-weight: 100;
      color: ${props => props.theme.colors.text.light};
    `
  },
  body3: {
    tag: 'span',
    style: css`
      font-size: ${props => props.theme.sizes.font.small};
      font-weight: 400;
      color: ${props => props.theme.colors.text.light};
    `
  },
  body4: {
    tag: 'span',
    style: css`
      font-size: ${props => props.theme.sizes.font.ultraSmall};
      font-weight: 400;
      color: ${props => props.theme.colors.text.light};
    `
  },
  div: {
    tag: 'div',
    style: css``
  }
}

export const Container = styled('div').attrs<ITypographyProps>(
  ({ as = 'heading1' }) => ({
    styles: parsedTypographys[as].style,
    as: parsedTypographys[as].tag
  })
)<IContainerProps>`
  ${props => props.styles};
  ${props => textColors[props.color || 'light']}
  margin-bottom: ${props => props.marginBottom || '0'};
  margin-left: ${props => props.marginLeft || '0'};
  margin-right: ${props => props.marginRight || '0'};
  margin-top: ${props => props.marginTop || '0'};
  text-align: ${props => props.align || 'inherit'};
  text-overflow: ellipse;
`
