import { Row, Col } from "react-bootstrap";
import CertificationCard from "~/components/molecules/certifications/CertificationCard";
import { certificationsData } from "~/data/certifications";

export default function Certifications() {
  const list = Array.isArray(certificationsData) ? certificationsData : [];
  return (
    <section id="certifications" className="py-5 text-white">
      <h2 className="mb-4">Certificaciones</h2>
      {list.length === 0 ? (
        <p className="text-warning">No hay certificaciones cargadas.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {list.map((c) => (
            <Col key={c.credentialId}>
              <CertificationCard {...c} />
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
}
