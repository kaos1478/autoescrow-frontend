import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  border-top: 1px solid ${props => props.theme.colors.quaternary};
  padding: 1rem 0;

  &:last-child {
    border-bottom: 1px solid ${props => props.theme.colors.quaternary};
  }
`
