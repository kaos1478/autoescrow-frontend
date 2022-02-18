import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;

  & > li {
    margin-bottom: 1rem;
    margin-right: 1rem;
  }
`
