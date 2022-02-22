import facepaint from 'facepaint'
import styled from 'styled-components'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 13rem);

  ${mq({
    width: ['calc(100vw - 3rem)', 'calc(100vw - 3rem)', 'calc(100vw - 13rem)']
  })}
`
