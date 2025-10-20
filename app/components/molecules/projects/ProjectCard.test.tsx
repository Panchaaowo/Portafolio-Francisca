import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProjectCard from '../projects/ProjectCard';

vi.mock('react-bootstrap/Card', () => ({
  default: ({ children, className }: any) => <div className={className}>{children}</div>,
  Body: ({ children }: any) => <div>{children}</div>,
  Title: ({ children }: any) => <h5>{children}</h5>,
  Text: ({ children }: any) => <p>{children}</p>,
  Img: ({ src, alt }: any) => <img src={src} alt={alt} />,
}));

vi.mock('react-bootstrap/Button', () => ({
  default: ({ children, href, target, rel, variant }: any) => (
    <a href={href} target={target} rel={rel} role="button" className={`btn btn-${variant}`}>
      {children}
    </a>
  ),
}));

describe('ProjectCard', () => {
  it('debe mostrar el título del proyecto', () => {
    render(<ProjectCard title="Test Project" description="Test desc" />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('debe mostrar la descripción', () => {
    render(<ProjectCard title="Test" description="Test description" />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('debe mostrar el botón "Ver proyecto" si hay link', () => {
    render(<ProjectCard title="Test" description="Test" link="https://test.com" />);
    expect(screen.getByRole('button', { name: /ver proyecto/i })).toBeInTheDocument();
  });

  it('no debe mostrar botón si no hay link', () => {
    render(<ProjectCard title="Test" description="Test" />);
    expect(screen.queryByRole('button', { name: /ver proyecto/i })).not.toBeInTheDocument();
  });

  it('debe tener el href correcto cuando hay link', () => {
    render(<ProjectCard title="Test" description="Test" link="https://github.com/test" />);
    const button = screen.getByRole('button', { name: /ver proyecto/i });
    expect(button).toHaveAttribute('href', 'https://github.com/test');
  });

  it('debe abrir en nueva pestaña', () => {
    render(<ProjectCard title="Test" description="Test" link="https://test.com" />);
    const button = screen.getByRole('button', { name: /ver proyecto/i });
    expect(button).toHaveAttribute('target', '_blank');
    expect(button).toHaveAttribute('rel', 'noreferrer');
  });
}); 