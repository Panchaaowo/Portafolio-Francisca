import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Projects from 'app/components/organisms/Projects';

describe('Projects', () => {
  it('debe mostrar el título "Proyectos"', () => {
    render(<Projects />);
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
  });

  it('debe mostrar los proyectos cargados', () => {
    render(<Projects />);
    expect(screen.getByText(/Portafolio Web/i)).toBeInTheDocument();
  });

  it('debe mostrar el proyecto Perfulandia', () => {
    render(<Projects />);
    expect(screen.getByText(/Proyecto-Perfulandia/i)).toBeInTheDocument();
  });

  it('debe mostrar las tecnologías usadas', () => {
    render(<Projects />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
