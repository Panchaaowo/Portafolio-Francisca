import React from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#contacto", label: "Contacto" },
];

export default function NavLinks() {
  return (
    <ul className="menu">
  {links.map(l => (
    <li key={l.href}>
      <a href={l.href}>{l.label}</a>
    </li>
  ))}
</ul>
  );
}