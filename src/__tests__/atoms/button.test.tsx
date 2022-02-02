/**
 * @jest-environment jsdom
 */

import { renderWithTheme } from '@/utils/tests'
import { screen } from '@testing-library/react'
import Button from '@/components/atoms/Button'

describe('Home', () => {
  it('renders a button', () => {
    renderWithTheme(<Button color="default">Generic</Button>)
    renderWithTheme(<Button color="defaultReverse">Reverse</Button>)
    renderWithTheme(<Button color="success">Success</Button>)
    renderWithTheme(<Button color="warning">Warning</Button>)
    renderWithTheme(<Button color="danger">Danger</Button>)

    const defaultButtonText = screen.getByText(/Generic/i)
    const defaultReverseButtonText = screen.getByText(/Reverse/i)
    const successButtonText = screen.getByText(/Success/i)
    const warningButtonText = screen.getByText(/Warning/i)
    const dangerButtonText = screen.getByText(/Danger/i)

    expect(defaultButtonText).toBeInTheDocument()
    expect(defaultReverseButtonText).toBeInTheDocument()
    expect(successButtonText).toBeInTheDocument()
    expect(warningButtonText).toBeInTheDocument()
    expect(dangerButtonText).toBeInTheDocument()
  })
})
