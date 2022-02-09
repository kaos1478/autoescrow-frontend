import facepaint from 'facepaint'
import styled, { css } from 'styled-components'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)
interface IContainerProps {
  active: boolean
}

const activeStyle = css`
  background-color: ${props => props.theme.colors.background.primary};
  border-color: ${props => props.theme.colors.primary};
`

export const Container = styled.li<IContainerProps>`
  align-items: center;
  border-left: 2px solid transparent;
  cursor: pointer;
  display: flex;
  height: 2.8rem;
  transition: all 0.5s;
  justify-content: center;

  ${mq({
    padding: ['1.5rem 0', '1.5rem 0', '1.5rem'],
    'justify-content': ['center', 'center', 'flex-start']
  })}

  ${props => props.active && activeStyle}

  & > span {
    ${mq({ display: ['none', 'none', 'block'] })}
  }
`
