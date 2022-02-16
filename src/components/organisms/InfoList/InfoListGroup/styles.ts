import styled from 'styled-components'

export const Header = styled.div`
  border: 1px solid ${props => props.theme.colors.input.border};
  border-bottom: 0;
  width: fit-content;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.background.tertiary};
  position: absolute;
  height: 2.5rem;
  top: calc(-2.5rem + 2px);
`

export const Container = styled.div`
  position: relative;
  background: tomato;
`

export const Content = styled.div`
  margin-top: 3.5rem;
  border: 1px solid ${props => props.theme.colors.input.border};
  background-color: ${props => props.theme.colors.background.tertiary};
  padding: 1rem;
`
