type Props = { onNav?: (id: string) => void };

const LINKS = [
  { id: "about", label: "Sobre mí" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Proyectos" },
  { id: "certifications", label: "Certificaciones" },
  { id: "contact", label: "Contacto" },
];

export default function NavLinks({ onNav }: Props) {
  const handle = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNav?.(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {LINKS.map((l) => (
        <li className="nav-item" key={l.id}>
          <a
            className="nav-link"
            href={`#${l.id}`}
            onClick={(e) => handle(e, l.id)}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
