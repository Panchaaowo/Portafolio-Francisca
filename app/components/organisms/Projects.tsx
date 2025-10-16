import { Row, Col } from "react-bootstrap";
import ProjectCard from "app/components/molecules/projects/ProjectCard";
import { projectsData } from "app/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <h2 className="mb-4">Proyectos</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {projectsData.map((p) => (
          <Col key={p.title}>
            <ProjectCard
              title={p.title}
              description={p.description}
              image={p.image}
              link={p.link}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
}
