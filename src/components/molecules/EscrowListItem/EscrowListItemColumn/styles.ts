import styled from 'styled-components'
import { IEscrowListItemColumnProps } from '.'

type TContainerProps = Pick<IEscrowListItemColumnProps, 'width'>

export const Container = styled.div<TContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 25rem;
  max-width: ${props => props.width};
  overflow: hidden;
  margin: auto;

  & > span {
    max-width: 100%;
    text-overflow: ellipse;
  }
`
