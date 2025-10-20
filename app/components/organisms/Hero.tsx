import { Row, Col } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="py-5">
      <Row className="align-items-center">
        {}
        <Col md={12}>
          <h1 className="hero-title text-start">
            Hola, soy <span className="title-accent">Francisca Miranda</span>
          </h1>
          <div className="d-flex gap-2">{/* botones/chips */}</div>
        </Col>
      </Row>
    </section>
  );
}
