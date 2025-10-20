import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from 'app/components/molecules/Header';

describe('Header', () => {
  it('debe mostrar el texto "Portafolio"', () => {
    render(<Header />);
    expect(screen.getByText(/portafolio/i)).toBeInTheDocument();
  });
  
  it('debe mostrar el link "Sobre mí"', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /sobre mí/i })).toBeInTheDocument();
  });

  it('debe mostrar el link "Habilidades"', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /habilidades/i })).toBeInTheDocument();
  });

  it('debe mostrar el link "Proyectos"', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /proyectos/i })).toBeInTheDocument();
  });

  it('debe mostrar el link "Certificaciones"', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /certificaciones/i })).toBeInTheDocument();
  });

  it('debe mostrar el link "Contacto"', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument();
  });

  it('debe tener sticky top', () => {
    const { container } = render(<Header />);
    const navbar = container.querySelector('.navbar');
    expect(navbar).toHaveClass('sticky-top');
  });
});
