import { render, screen, within } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

// 🔧 Mock de los hijos para que el test sea estable y rápido
vi.mock('app/components/molecules/Header', () => ({
  default: () => <nav data-testid="header-brand">Portafolio</nav>,
}))

vi.mock('app/components/organisms/Hero', () => ({
  default: () => <section id="hero">Hero</section>,
}))
vi.mock('app/components/organisms/About', () => ({
  default: () => <section id="about"><h2>Sobre mí</h2></section>,
}))
vi.mock('app/components/organisms/Skills', () => ({
  default: () => <section id="skills"><h2>Mi Stack Tecnológico</h2></section>,
}))
vi.mock('app/components/organisms/Projects', () => ({
  default: () => <section id="projects"><h2>Proyectos</h2></section>,
}))
vi.mock('app/components/organisms/Certifications', () => ({
  default: () => <section id="certifications"><h2>Certificaciones</h2></section>,
}))
vi.mock('app/components/organisms/Contact', () => ({
  default: () => <section id="contact"><h2>Contacto</h2></section>,
}))

import HomeLayout from './HomeLayout'

describe('HomeLayout', () => {
  it('monta header, main con contenido y footer', () => {
    render(<HomeLayout />)

    
    expect(screen.getByTestId('header-brand')).toHaveTextContent(/portafolio/i)

   
    const main = screen.getByRole('main')
    expect(main).toHaveClass('main-content')

    
    expect(screen.getByRole('heading', { name: /sobre mí/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /mi stack tecnológico/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /proyectos/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /certificaciones/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /contacto/i })).toBeInTheDocument()

    
    const footer = screen.getByText(/Francisca Miranda — Portafolio/i).closest('footer') as HTMLElement
    expect(footer).toBeInTheDocument()

    expect(footer.textContent).toMatch(/© \d{4}/)
  })
})
