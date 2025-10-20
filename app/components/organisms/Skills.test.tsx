import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from 'app/components/organisms/Skills';

describe('Skills', () => {
  it('debe mostrar el título "Mi Stack Tecnológico"', () => {
    render(<Skills />);
    expect(screen.getByText('Mi Stack Tecnológico')).toBeInTheDocument();
  });

  it('debe mostrar la sección Frontend', () => {
    render(<Skills />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('debe mostrar la sección Backend', () => {
    render(<Skills />);
    expect(screen.getByText('Backend')).toBeInTheDocument();
  });

  it('debe mostrar la sección Mobile & Tools', () => {
    render(<Skills />);
    expect(screen.getByText('Mobile & Tools')).toBeInTheDocument();
  });

  it('debe mostrar habilidades como React', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('debe mostrar habilidades como Java', () => {
    render(<Skills />);
    expect(screen.getByText('Java')).toBeInTheDocument();
  });

  it('debe mostrar habilidades como HTML', () => {
    render(<Skills />);
    expect(screen.getByText('HTML')).toBeInTheDocument();
  });

  it('debe mostrar habilidades como Kotlin', () => {
    render(<Skills />);
    expect(screen.getByText('Kotlin')).toBeInTheDocument();
  });
});