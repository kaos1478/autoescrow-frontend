import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.background.secondary};
  display: flex;
  height: 3.8rem;
  justify-content: flex-end;
  padding: 0 2rem;
  width: calc(100vw - 13rem);
`
