// app/components/molecules/Header.tsx
import { Container, Navbar, Nav } from "react-bootstrap";
import HeaderActions from "app/components/atoms/HeaderActions";
import Logo from "app/components/atoms/Logo";

const LINKS = [
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Proyectos" },
  { id: "certifications", label: "Certificaciones" },
  { id: "contact", label: "Contacto" },
];

export default function Header() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Navbar expand="lg" sticky="top" bg="black" data-bs-theme="dark" className="border-bottom border-secondary">
      <Container fluid> {/* fluid para aprovechar todo el ancho */}
        {/* Izquierda: logo/brand */}
        <Navbar.Brand
          href="#about"
          onClick={(e) => { e.preventDefault(); scrollTo("about"); }}
          className="fw-bold"
        >
          <Logo />
        </Navbar.Brand>

        {/* Hamburguesa en móvil */}
        <Navbar.Toggle aria-controls="main-nav" />

        {/* Contenido colapsable */}
        <Navbar.Collapse id="main-nav" className="align-items-center w-100">
          {/* Centro: links */}
          <Nav className="mx-auto gap-3"> {/* <-- el truco: mx-auto + gap */}
            {LINKS.map(l => (
              <Nav.Link
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(l.id); }}
              >
                {l.label}
              </Nav.Link>
            ))}
          </Nav>

          {/* Derecha: acciones */}
          <div className="d-flex gap-2 ms-lg-3">
            <HeaderActions />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
