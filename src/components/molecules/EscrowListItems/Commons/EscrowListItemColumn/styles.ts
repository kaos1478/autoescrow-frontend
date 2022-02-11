import styled from 'styled-components'
import { IEscrowListItemColumnProps } from '.'

type TContainerProps = Pick<IEscrowListItemColumnProps, 'width'>

export const Container = styled.div<TContainerProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${props => props.width};
  overflow: hidden;
  margin: auto;

  & > span {
    max-width: 100%;
  }
`
