import styled from 'styled-components'
import { IEscrowItemListItemColumnProps } from '.'

type TContainerProps = Pick<IEscrowItemListItemColumnProps, 'width'>

export const Container = styled.div<TContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 25rem;
  width: ${props => props.width};
  overflow: hidden;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  & > span {
    max-width: 100%;
    text-overflow: ellipse;
  }
`
