import styled from 'styled-components'

interface IContainerProps {
  isOpen: boolean
}

export const Container = styled.div<IContainerProps>`
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  height: 100vh;
  justify-content: center;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  pointer-events: ${props => (props.isOpen ? 'inherit' : 'none')};
  position: fixed;
  transition: all 1s;
  width: 100vw;
  z-index: 10;
`

export const Content = styled.div<IContainerProps>`
  background-color: ${props => props.theme.colors.background.secondary};
  border-radius: ${props => props.theme.sizes.button.borderRadius};
  overflow: hidden;
  position: relative;
  transform: translateY(${props => (props.isOpen ? '0' : '100%')});
  transition: all 1s;
  width: 27rem;
`

export const Header = styled.div`
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.quaternary};
  display: flex;
  height: 4rem;
  justify-content: flex-start;
  padding: 0 1rem;
  width: 100%;
`

export const Body = styled.div`
  height: calc(100% - 8rem);
  padding: 1rem;
  width: 100%;
`

export const Footer = styled.div`
  display: flex;
  height: 4rem;
  justify-content: space-around;
  width: 100%;
`
