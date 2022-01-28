import styled from 'styled-components'

export const Container = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`
