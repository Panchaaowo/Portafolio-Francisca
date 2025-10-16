import { Form, Button, Row, Col, Card } from "react-bootstrap";

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <h2 className="mb-4">Contacto</h2>
      <Card className="bg-secondary-subtle border-0 p-4 text-dark">
        <Form onSubmit={(e) => e.preventDefault()}>
          <Row className="g-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control required placeholder="Tu nombre" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required placeholder="tu@email.com" />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group>
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={4} required placeholder="¿Cómo puedo ayudarte?" />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Button type="submit" variant="dark">Enviar</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </section>
  );
}
