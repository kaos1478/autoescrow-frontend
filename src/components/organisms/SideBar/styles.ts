import styled from 'styled-components'
import facepaint from 'facepaint'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.background.tertiary};
  display: flex;
  flex-direction: column;
  ${mq({ width: ['3rem', '3rem', '13rem'] })}

  & > h1:nth-child(1) {
    ${mq({ display: ['none', 'none', 'block'] })}
  }

  & > h1:nth-child(2) {
    ${mq({ display: ['block', 'block', 'none'] })}
  }

  & > button {
    ${mq({ display: ['none', 'none', 'block'] })}
  }
`
