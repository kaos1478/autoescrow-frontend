/**
 * @jest-environment jsdom
 */

import { renderWithTheme } from '@/utils/tests'
import { screen } from '@testing-library/react'
import Input from '@/components/atoms/Input'
import userEvent from '@testing-library/user-event'

describe('Home', () => {
  test('render Input', () => {
    renderWithTheme(<Input placeholder="InputPlaceHolder" />)
    const inputText = screen.getAllByPlaceholderText(/InputPlaceHolder/i)
    userEvent.type(inputText[0], 'teste')

    expect(inputText[0]).toBeInTheDocument()
    expect(inputText[0]).toHaveValue('teste')
  })
})
