import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from 'app/components/organisms/Contact';

describe('Contact', () => {
  it('debe mostrar el título "Contacto"', () => {
    render(<Contact />);
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  it('debe mostrar el email', () => {
    render(<Contact />);
    expect(screen.getByText(/fr.mirandam@duocuc.cl/i)).toBeInTheDocument();
  });

  it('debe mostrar WhatsApp', () => {
    render(<Contact />);
    expect(screen.getByText(/WhatsApp/i)).toBeInTheDocument();
  });

  it('debe mostrar LinkedIn', () => {
    render(<Contact />);
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
  });

  it('debe mostrar GitHub', () => {
    render(<Contact />);
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
  });

  it('debe tener 4 métodos de contacto', () => {
    render(<Contact />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
  });
});