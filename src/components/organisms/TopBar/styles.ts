import facepaint from 'facepaint'
import styled from 'styled-components'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  display: flex;
  height: 3.8rem;
  ${mq({
    'justify-content': ['space-between', 'space-between', 'flex-end']
  })}
  padding: 0 2rem;
  width: calc(100vw - 13rem);

  ${mq({
    width: [
      'calc(100vw - 3rem);',
      'calc(100vw - 3rem);',
      'calc(100vw - 13rem);'
    ]
  })}
`

export const RightContent = styled.div`
  display: flex;
  align-items: center;
`
