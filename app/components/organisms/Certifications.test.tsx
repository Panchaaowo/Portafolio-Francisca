import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Certifications from 'app/components/organisms/Certifications';

describe('Certifications', () => {
  it('debe mostrar el título "Certificaciones"', () => {
    render(<Certifications />);
    expect(screen.getByText('Certificaciones')).toBeInTheDocument();
  });

  it('debe mostrar las certificaciones cargadas', () => {
    render(<Certifications />);
    expect(screen.getByText(/Ethical Hacking/i)).toBeInTheDocument();
  });

  it('debe mostrar Python Essentials', () => {
    render(<Certifications />);
    expect(screen.getByText(/Python Essentials/i)).toBeInTheDocument();
  });

  it('debe mostrar ISO certification', () => {
    render(<Certifications />);
    expect(screen.getByText(/ISO\/IEC 27001/i)).toBeInTheDocument();
  });
});