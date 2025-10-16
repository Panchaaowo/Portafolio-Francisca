import { Row, Col, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section className="py-5">
      <Row className="align-items-center">
        <Col md={7}>
          <h1 className="display-5 neon-title">
  Hola, soy <span className="title-accent">Francisca Miranda</span>
</h1>
<div className="d-flex gap-2">

</div>
        </Col>
        <Col md={5} className="text-center mt-4 mt-md-0">
          <div className="rounded-4 bg-black border border-info p-5">✨</div>
        </Col>
      </Row>
    </section>
  );
}
