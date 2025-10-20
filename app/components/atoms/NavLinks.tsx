"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

type LinkDef = {
  id: "about" | "skills" | "projects" | "certifications" | "contact";
  label: string;
};
type Props = { onNav?: (id: LinkDef["id"]) => void };

const LINKS = [
  { id: "about",          label: "Sobre mí" },
  { id: "skills",         label: "Habilidades" },
  { id: "projects",       label: "Proyectos" },
  { id: "certifications", label: "Certificaciones" },
  { id: "contact",        label: "Contacto" },
] as const satisfies readonly LinkDef[];

export default function NavLinks({ onNav }: Props) {
  const [activeId, setActiveId] = useState<LinkDef["id"]>(LINKS[0].id);

  const containerRef = useRef<HTMLUListElement | null>(null);
 
  const linkRefs = useRef<Map<LinkDef["id"], HTMLAnchorElement>>(new Map());

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: LinkDef["id"]) => {
    e.preventDefault();
    onNav?.(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((en) => en.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const el = visible?.target as HTMLElement | undefined;
        const id = el?.id as LinkDef["id"] | undefined;
        if (id && LINKS.some((l) => l.id === id)) setActiveId(id);
      },
      {
        rootMargin: "-64px 0px -60% 0px",
        threshold: [0.2, 0.5, 0.8],
      }
    );

    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  
  const indicatorStyle = useMemo<React.CSSProperties>(() => {
    const container = containerRef.current;
    const el = linkRefs.current.get(activeId) ?? null;
    if (!container || !el) return { transform: "translateX(0px)", width: 0, opacity: 0 };

    const cRect = container.getBoundingClientRect();
    const lRect = el.getBoundingClientRect();
    const left = lRect.left - cRect.left + container.scrollLeft;

    return { transform: `translateX(${left}px)`, width: `${lRect.width}px`, opacity: 1 };
  }, [activeId]);


  useEffect(() => {
    const onResize = () => setActiveId((v) => v);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <ul
      ref={containerRef}
      className="navbar-nav me-auto mb-2 mb-lg-0 position-relative"
      style={{ ["--nav-indicator-h" as any]: "2px" }}
    >
      {/* Indicador */}
      <span
        className="position-absolute"
        style={{
          bottom: 0,
          left: 0,
          height: "var(--nav-indicator-h)",
          background:
            "linear-gradient(90deg, var(--primary-400, #7BDCF6), var(--primary-500, #4CC9F0))",
          borderRadius: 999,
          boxShadow: "0 0 12px rgba(76,201,240,.35)",
          transition: "transform .25s ease, width .25s ease, opacity .15s ease",
          ...indicatorStyle,
        }}
      />

      {LINKS.map((l) => (
        <li className="nav-item position-relative" key={l.id}>
          <a
            ref={(el) => {
              if (el) linkRefs.current.set(l.id, el);
            }}
            className={`nav-link ${activeId === l.id ? "active" : ""}`}
            href={`#${l.id}`}
            onClick={(e) => handleClick(e, l.id)}
            style={{
              color: activeId === l.id ? "var(--bs-body-color)" : undefined,
              textShadow: activeId === l.id ? "0 0 10px rgba(76,201,240,.25)" : undefined,
              transition: "color .16s ease, text-shadow .16s ease",
            }}
          >
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
