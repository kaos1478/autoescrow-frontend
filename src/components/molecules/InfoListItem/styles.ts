import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  align-items: flex-end;

  &:not(:first-child) {
    margin-top: 0.3rem;
  }
`

export const Description = styled.div``

export const Value = styled.div`
  transition: all 0.5s;
  overflow: hidden;
  margin-left: 0.5rem;
`
