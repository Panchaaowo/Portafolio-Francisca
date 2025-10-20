import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from 'app/components/organisms/Hero';

describe('Hero', () => {
  it('debe mostrar el saludo "Hola, soy"', () => {
    render(<Hero />);
    expect(screen.getByText(/Hola, soy/i)).toBeInTheDocument();
  });

  it('debe mostrar el nombre "Francisca Miranda"', () => {
    render(<Hero />);
    expect(screen.getByText(/Francisca Miranda/i)).toBeInTheDocument();
  });

  it('debe tener el heading principal', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
