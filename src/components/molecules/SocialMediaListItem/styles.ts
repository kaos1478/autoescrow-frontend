import styled from 'styled-components'

export const Container = styled.li`
  & > a {
    text-decoration: none;
    & > span {
      color: ${props => props.theme.colors.primary};
    }
  }
`
