import { Row, Col, Card } from "react-bootstrap";
import SkillCard from "app/components/molecules/skills/SkillCard";
import { skillsData } from "app/data/skills";

function Section({
  title,
  items,
}: {
  title: string;
  items: { name: string }[];
}) {
  return (
    <>
      <h5 className="mt-4 mb-3">{title}</h5>
      <Row xs={2} md={3} lg={6} className="g-3">
        {items.map((s) => (
          <Col key={s.name}>
            <SkillCard name={s.name} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-5">
      <h2 className="mb-4">Habilidades</h2>
      <Card className="bg-secondary-subtle border-0 p-4 text-dark">
        <Section title="Frontend" items={skillsData.frontend} />
        <Section title="Backend" items={skillsData.backend} />
        <Section title="Mobile" items={skillsData.mobile} />
        <Section title="Bases de Datos" items={skillsData.databases} />
        <Section
          title="Herramientas y Control de Versiones"
          items={skillsData.tools}
        />
      </Card>
    </section>
  );
}
