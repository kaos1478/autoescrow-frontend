import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  & > li {
    margin-bottom: 1rem;
  }
`
