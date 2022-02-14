import styled from 'styled-components'

export const Container = styled.li``

export const Header = styled.div`
  padding: 1.5rem;
`

export const Body = styled.div<{ toggle: boolean }>`
  transition: all 0.5s;
  height: ${props => (props.toggle ? 'fit-content' : '0px')};
  overflow: hidden;
`
