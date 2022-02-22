import styled from 'styled-components'
import facepaint from 'facepaint'
import theme from '@/styles/theme'
const mq = facepaint(theme.breakpoints)

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 3.8rem);
  position: relative;
  width: 100%;
  ${mq({ padding: ['1rem', '1rem', '1.6rem'] })}
`

export const Content = styled.div`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.sizes.button.borderRadius};
  height: 100%;
  overflow-y: auto;
`

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.quaternary};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 4.5rem;
  padding: 1rem;
`

export const Title = styled.div`
  align-items: center;
  display: flex;
`
