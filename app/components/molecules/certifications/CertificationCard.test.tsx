// app/components/molecules/certifications/CertificationCard.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CertificationCard from './CertificationCard'

// ✅ Mock correcto para Card: subcomponentes como propiedades del default export
vi.mock('react-bootstrap/Card', () => {
  const Card = ({ children, className, ...rest }: any) => (
    <div data-testid="card" className={className} {...rest}>
      {children}
    </div>
  )
  Card.Body = ({ children, ...rest }: any) => <div data-testid="card-body" {...rest}>{children}</div>
  Card.Title = ({ children, ...rest }: any) => <h5 data-testid="card-title" {...rest}>{children}</h5>
  Card.Subtitle = ({ children, className, ...rest }: any) => (
    <div data-testid="card-subtitle" className={className} {...rest}>{children}</div>
  )
  Card.Text = ({ children, ...rest }: any) => <p data-testid="card-text" {...rest}>{children}</p>
  Card.Img = ({ src, alt, style, ...rest }: any) => (
    <img data-testid="card-img" src={src} alt={alt} style={style} {...rest} />
  )
  return { default: Card }
})

// ✅ Mock de Button: respeta `as="a"` para link externo
vi.mock('react-bootstrap/Button', () => ({
  default: ({ as, children, ...props }: any) =>
    as === 'a'
      ? <a data-testid="button" {...props}>{children}</a>
      : <button data-testid="button" {...props}>{children}</button>,
}))

// ✅ Mock de iconos sin variables top-level (evita el hoisting error)
vi.mock('react-icons/bs', async () => {
  const MockIcon = (props: any) => <span data-testid="icon" {...props} />
  return {
    BsAward: MockIcon,
    BsBuilding: MockIcon,
    BsCalendar2: MockIcon,
    BsHash: MockIcon,
    BsBoxArrowUpRight: MockIcon,
  }
})

describe('CertificationCard', () => {
  const mockProps = {
    title: 'Test Certification',
    issuer: 'Test Institute',
    date: '2024-01-01',
    credentialId: 'ABC-123',
    image: '/test.png',
    verifyUrl: 'https://test.com',
  }

  it('renderiza título, emisor e imagen', () => {
    render(<CertificationCard {...mockProps} />)
    expect(screen.getByTestId('card-title')).toHaveTextContent(mockProps.title)
    expect(screen.getByText(mockProps.issuer)).toBeInTheDocument()
    expect(screen.getByTestId('card-img')).toHaveAttribute('src', mockProps.image)
  })

  it('incluye el link de validación externo', () => {
    render(<CertificationCard {...mockProps} />)
    const btn = screen.getByTestId('button')
    expect(btn).toHaveAttribute('href', mockProps.verifyUrl)
    expect(btn).toHaveAttribute('target', '_blank')
    expect(btn).toHaveAttribute('rel', 'noreferrer')
  })
})
