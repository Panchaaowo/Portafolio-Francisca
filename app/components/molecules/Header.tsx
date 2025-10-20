import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const LINKS = [
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Proyectos" },
  { id: "certifications", label: "Certificaciones" },
  { id: "contact", label: "Contacto" },
];

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    scrollTo(id);
    setExpanded(false); 
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      bg="dark"
      variant="dark"
      className="border-bottom border-secondary"
      expanded={expanded}              
      onToggle={(val) => setExpanded(val)}
    >
      <Container fluid>
        <Navbar.Brand
          href="#about"
          onClick={(e) => handleNavClick(e, "about")}
          className="fw-bold brand-title"
          aria-label="Portafolio"
        >
          Portafolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" />

        <Navbar.Collapse id="main-nav" className="align-items-center w-100">
          {}
          <Nav className="mx-auto gap-3">
            {LINKS.map((l) => (
              <Nav.Link
                key={l.id}
                href={`#${l.id}`}
                onClick={(e) => handleNavClick(e, l.id)}
              >
                {l.label}
              </Nav.Link>
            ))}
          </Nav>

          {}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
