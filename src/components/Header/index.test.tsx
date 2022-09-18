import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Header } from './'

test('Header should be in the document', () => {
  render(<Header />)

  const header = screen.getByText('Header')

  expect(header).toBeInTheDocument()
})
