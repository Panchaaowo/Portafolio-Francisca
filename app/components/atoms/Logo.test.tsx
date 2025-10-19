// app/components/molecules/__tests__/Logo.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

// ajusta la ruta si tu archivo no está exactamente aquí
import Logo from 'app/components/atoms/Logo'

describe('Logo', () => {
  it('renderiza un link con el texto "Portafolio" que apunta a "/"', () => {
    render(<Logo />)

    // debe existir un link accesible por su nombre
    const link = screen.getByRole('link', { name: /portafolio/i })
    expect(link).toBeInTheDocument()

    // href correcto
    expect(link).toHaveAttribute('href', '/')

    // clases mínimas esperadas
    expect(link).toHaveClass('navbar-brand')
    expect(link).toHaveClass('fw-bold')
    expect(link).toHaveClass('text-light')

    // el texto visible debe ser "Portafolio" (el segundo span está vacío)
    expect(link).toHaveTextContent(/^Portafolio$/)
  })
})
