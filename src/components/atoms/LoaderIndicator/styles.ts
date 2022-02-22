import styled, { keyframes } from 'styled-components'

const animation1 = keyframes`
  0% {
    height: ${Math.floor(Math.random() * 101)}%;
  } 100% {
    height: 100%;
  }
`

const animation2 = keyframes`
  0% {
    height: ${Math.floor(Math.random() * 101)}%;
  } 100% {
    height: 100%;
  }
`

const animation3 = keyframes`
  0% {
    height: ${Math.floor(Math.random() * 101)}%;
  } 100% {
    height: 100%;
  }
`

const animation4 = keyframes`
  0% {
    height: ${Math.floor(Math.random() * 101)}%;
  } 100% {
    height: 100%;
  }
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 20px;
  width: min-content;

  & > div {
    background-color: ${props => props.theme.colors.primary};
    margin: 0 0.1rem;
    width: 3px;
  }

  & > div:nth-child(1) {
    animation: ${animation1} infinite 0.5s alternate;
  }

  & > div:nth-child(2) {
    animation: ${animation2} infinite 0.8s alternate;
  }

  & > div:nth-child(3) {
    animation: ${animation3} infinite 1s alternate;
  }

  & > div:nth-child(4) {
    animation: ${animation4} infinite 0.4s alternate;
  }
`
