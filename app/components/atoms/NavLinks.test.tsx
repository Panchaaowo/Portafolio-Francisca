import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NavLinks from './NavLinks';

// Mock del IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

describe('NavLinks', () => {
  it('renderiza todos los links correctamente', () => {
    render(<NavLinks />);

    const expectedLinks = [
      { text: 'Sobre mí', href: '#about' },
      { text: 'Habilidades', href: '#skills' },
      { text: 'Proyectos', href: '#projects' },
      { text: 'Certificaciones', href: '#certifications' },
      { text: 'Contacto', href: '#contact' }
    ];

    expectedLinks.forEach(({ text, href }) => {
      const link = screen.getByRole('link', { name: text });
      expect(link).toHaveAttribute('href', href);
    });
  });

  it('llama a onNav cuando se hace click en un link', () => {
    const onNav = vi.fn();
    render(<NavLinks onNav={onNav} />);

    fireEvent.click(screen.getByRole('link', { name: 'Proyectos' }));
    expect(onNav).toHaveBeenCalledWith('projects');
  });
});