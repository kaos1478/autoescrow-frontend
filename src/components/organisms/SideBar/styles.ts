import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.background.tertiary};
  display: flex;
  flex-direction: column;
  min-width: 13rem;
`
