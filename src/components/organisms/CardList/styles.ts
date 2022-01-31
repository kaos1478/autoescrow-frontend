import styled from 'styled-components'

export const Container = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  & > li {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`
