import styled from 'styled-components'
import facepaint from 'facepaint'
import theme from '@/styles/theme'

const mq = facepaint(theme.breakpoints)

export const Container = styled.li`
  background-color: ${props => props.theme.colors.background.secondary};
  width: 16rem;
  height: 6.25rem;
  border-radius: ${props => props.theme.sizes.card.borderRadius};
  display: flex;

  ${mq({
    width: ['11rem', '11rem', '16rem'],
    padding: ['0.5rem', '0.5rem', '0']
  })};
`

export const InfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const IconContent = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  ${mq({ display: ['none', 'none', 'inherit'] })};
`
