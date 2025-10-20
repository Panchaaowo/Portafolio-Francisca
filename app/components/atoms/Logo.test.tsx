
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Logo from 'app/components/atoms/Logo'

describe('Logo', () => {
  it('renderiza un link con el texto "Portafolio" que apunta a "/"', () => {
    render(<Logo />)

    const link = screen.getByRole('link', { name: /portafolio/i })
    expect(link).toBeInTheDocument()

    expect(link).toHaveAttribute('href', '/')

 
    expect(link).toHaveClass('navbar-brand')
    expect(link).toHaveClass('fw-bold')
    expect(link).toHaveClass('text-light')


    expect(link).toHaveTextContent(/^Portafolio$/)
  })
})
