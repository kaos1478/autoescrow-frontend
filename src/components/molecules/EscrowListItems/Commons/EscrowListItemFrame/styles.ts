import facepaint from 'facepaint'
import styled, { css } from 'styled-components'
import theme from '@/styles/theme'
import { IEscrowListItemFrame } from '.'

const mq = facepaint(theme.breakpoints)

const stylesByStatus = {
  open: css`
    ${mq({
      'grid-template-columns': [
        '1fr',
        '1fr 1fr 2fr',
        '1fr 1fr 2fr 1fr 1fr 2fr'
      ],
      'grid-template-rows': ['1fr 1fr 1fr 1fr 1fr 1fr', '1fr 1fr', '1fr']
    })}

    & > div {
      ${mq({
        margin: ['0.5rem auto', '0.5rem auto', 'auto']
      })}
    }
  `,
  paid: css`
    ${mq({
      'grid-template-columns': [
        '1fr',
        '1fr 1fr 2fr',
        '1fr 1fr 2fr 1fr 1fr 2fr'
      ],
      'grid-template-rows': ['1fr 1fr 1fr 1fr 1fr 1fr', '1fr 1fr', '1fr']
    })}

    & > div {
      ${mq({
        margin: ['0.5rem auto', '0.5rem auto', 'auto']
      })}
    }
  `,
  dispute: css`
    ${mq({
      'grid-template-columns': [
        '1fr',
        '1fr 1fr 2fr',
        '1fr 1fr 2fr 1fr 1fr 2fr'
      ],
      'grid-template-rows': ['1fr 1fr 1fr 1fr 1fr 1fr', '1fr 1fr', '1fr']
    })}

    & > div {
      ${mq({
        margin: ['0.5rem auto', '0.5rem auto', 'auto']
      })}
    }
  `
}

export const Container = styled.li<IEscrowListItemFrame>`
  border-bottom: 1px solid ${props => props.theme.colors.quaternary};
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 2fr;
  padding: 1rem 1rem;

  ${props => stylesByStatus[props.status]}
`
