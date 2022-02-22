import styled from 'styled-components'

export const Header = styled.div`
  background-color: ${props => props.theme.colors.background.tertiary};
  border-bottom: 0;
  border: 1px solid ${props => props.theme.colors.input.border};
  height: 2.5rem;
  padding: 0.5rem;
  position: absolute;
  top: calc(-2.5rem + 2px);
  width: fit-content;
`

export const Container = styled.div`
  background: tomato;
  position: relative;
`

export const Content = styled.div`
  background-color: ${props => props.theme.colors.background.tertiary};
  border: 1px solid ${props => props.theme.colors.input.border};
  margin-top: 3.5rem;
  padding: 1rem;
`
