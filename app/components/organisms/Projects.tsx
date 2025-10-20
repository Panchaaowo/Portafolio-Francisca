"use client";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "app/components/molecules/projects/ProjectCard";
import { projectsData } from "app/data/projects";


import type { IconType } from "react-icons";
import {
  SiReact, SiTypescript, SiBootstrap, SiTailwindcss,
  SiOpenjdk, SiSpring, SiMysql, SiSwagger, SiPostman,
  SiJavascript, SiNodedotjs, SiKotlin, SiAndroidstudio, SiGithub
} from "react-icons/si";


const TAG_ICON: Record<string, IconType> = {
  React: SiReact,
  "TypeScript": SiTypescript,
  JavaScript: SiJavascript,
  Bootstrap: SiBootstrap,
  TailwindCSS: SiTailwindcss,
  Java: SiOpenjdk,
  "Spring": SiSpring,
  "Spring Boot": SiSpring,
  MySQL: SiMysql,
  Swagger: SiSwagger,
  Postman: SiPostman,
  "Node.js": SiNodedotjs,
  Kotlin: SiKotlin,
  "Android Studio": SiAndroidstudio,
  GitHub: SiGithub,
};


const TAG_COLOR: Record<string, string> = {
  React: "#61DAFB",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Bootstrap: "#7952B3",
  TailwindCSS: "#06B6D4",
  Java: "#EA2D2E",
  "Spring": "#6DB33F",
  "Spring Boot": "#6DB33F",
  MySQL: "#4479A1",
  Swagger: "#85EA2D",
  Postman: "#FF6C37",
  "Node.js": "#339933",
  Kotlin: "#7F52FF",
  "Android Studio": "#3DDC84",
  GitHub: "#181717",
};

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="text-center mb-4">
        <h2 className="mb-1 section-title-neon">Proyectos</h2>
        <p className="text-muted m-auto max-62ch">
        </p>
      </div>

      <Row xs={1} md={2} lg={3} className="g-4">
        {projectsData.map((p) => (
          <Col key={p.title}>
            <div className="d-grid gap-2">
              <ProjectCard
                title={p.title}
                description={p.description}
                image={p.image}
                link={p.link}
              />

              {}
              {p.tags?.length ? (
                <div className="d-flex flex-wrap gap-2">
                  {p.tags.map((t) => {
                    const Icon = TAG_ICON[t];
                    const color = TAG_COLOR[t] || "var(--primary-400)";
                    return (
                      <span key={t} className="tag d-inline-flex align-items-center gap-2">
                        {Icon ? <Icon size={14} color={color} /> : null}
                        <span>{t}</span>
                      </span>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}
