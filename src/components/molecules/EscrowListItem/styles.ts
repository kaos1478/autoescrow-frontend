import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  border-top: 1px solid ${props => props.theme.colors.quaternary};

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`
