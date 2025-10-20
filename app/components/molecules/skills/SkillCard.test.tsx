import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillCard from '../skills/SkillCard';

describe('SkillCard', () => {
  it('debe mostrar el nombre de la habilidad', () => {
    render(<SkillCard name="React" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('debe renderizar con JavaScript', () => {
    render(<SkillCard name="JavaScript" />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('debe renderizar con TypeScript', () => {
    render(<SkillCard name="TypeScript" />);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('debe tener el atributo title con el nombre', () => {
    render(<SkillCard name="Python" />);
    expect(screen.getByTitle('Python')).toBeInTheDocument();
  });

  it('debe renderizar con Python', () => {
    render(<SkillCard name="Python" />);
    expect(screen.getByText('Python')).toBeInTheDocument();
  });
});