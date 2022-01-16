/**
 * @jest-environment jsdom
 */

import { screen } from '@testing-library/react'
import Typography from '@/components/atoms/Typography'
import { renderWithTheme } from '@/utils/tests'

describe('Home', () => {
  it('renders a button', () => {
    renderWithTheme(<Typography as="heading1">Heading1</Typography>)
    renderWithTheme(<Typography as="heading2">Heading2</Typography>)
    renderWithTheme(<Typography as="body1">Body1</Typography>)
    renderWithTheme(<Typography as="body2">Body2</Typography>)
    renderWithTheme(<Typography as="body3">Body3</Typography>)
    renderWithTheme(<Typography as="body4">Body4</Typography>)

    const heading1Text = screen.getByText(/Heading1/i)
    const heading2Text = screen.getByText(/Heading2/i)
    const body1Text = screen.getByText(/Body1/i)
    const body2Text = screen.getByText(/Body2/i)
    const body3Text = screen.getByText(/Body3/i)
    const body4Text = screen.getByText(/Body4/i)

    expect(heading1Text).toBeInTheDocument()
    expect(heading2Text).toBeInTheDocument()
    expect(body1Text).toBeInTheDocument()
    expect(body2Text).toBeInTheDocument()
    expect(body3Text).toBeInTheDocument()
    expect(body4Text).toBeInTheDocument()
  })
})
