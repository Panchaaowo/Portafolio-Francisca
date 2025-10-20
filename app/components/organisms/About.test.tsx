import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from 'app/components/organisms/About';

describe('About', () => {
  it('debe mostrar el título "Sobre mí"', () => {
    render(<About />);
    expect(screen.getByText('Sobre mí')).toBeInTheDocument();
  });

  it('debe mostrar información sobre Francisca', () => {
    render(<About />);
    expect(screen.getByText(/Soy Francisca/i)).toBeInTheDocument();
  });

  it('debe mostrar la sección de desarrollo Full Stack', () => {
    render(<About />);
    expect(screen.getByText(/desarrolladora Full Stack/i)).toBeInTheDocument();
  });

  it('debe mostrar información sobre experiencia backend', () => {
    render(<About />);
    expect(screen.getByText(/desarrollo backend/i)).toBeInTheDocument();
  });

  it('debe tener la imagen de perfil', () => {
    render(<About />);
    expect(screen.getByAltText('Foto de perfil')).toBeInTheDocument();
  });
});
