import styled, { css } from 'styled-components'
import { IEscrowListItemFrame } from '.'
import facepaint from 'facepaint'
import theme from '@/styles/theme'

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
  display: grid;
  border-bottom: 1px solid ${props => props.theme.colors.quaternary};
  padding: 1rem 1rem;
  grid-template-columns: 1fr 1fr 2fr 1fr 1fr 2fr;

  ${props => stylesByStatus[props.status]}
`
