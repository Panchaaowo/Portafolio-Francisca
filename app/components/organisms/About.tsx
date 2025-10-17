import { Row, Col, Image } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="py-5">
      <h2 className="mb-4">Sobre mí</h2>
      <Row className="align-items-center g-4">
        <Col md={4} className="text-center">
          {/* Reemplaza por tu foto en app/assets/images/me.jpg */}
          <div className="rounded-4 bg-black border border-info p-4 d-inline-block">
           <Image alt="Foto" src={"app/assts/img/yo.png"} style={{ width: 300, height: "auto" }} rounded />
            <span className="fs-2"></span>
          </div>
        </Col>
        <Col md={8}>
  <p className="text-secondary mb-4">
    {"Hola, soy Francisca, estudiante de Ingeniería en Informática en mi 4.º semestre. El semestre pasado me enfoqué en backend; fue un aprendizaje nuevo que disfruté mucho y que me ayudó a fortalecer mi lógica, la organización del código y la forma de resolver problemas. Soy una persona sociable, con facilidad para trabajar en equipo y adaptarme a distintos entornos. Además de mi formación, tengo experiencia en atención al cliente en KFC y Burger King, y como productora de alimentos en Trendy, donde desarrollé habilidades de comunicación, disciplina y orientación al servicio. Me motiva seguir aprendiendo, construir soluciones útiles y crecer profesionalmente combinando lo técnico con el trato cercano a las personas."}
  </p>

  <p className="text-secondary mt-3 mb-0">
    {"Actualmente estoy en FullStack desarrollando con React. Uso Bootstrap para estilos y componentes y React Router para la navegación. En base de datos trabajo con Oracle PL/SQL, implementando un package que agrupa funciones, procedimientos y triggers, encargados de reglas de negocio, validaciones y automatización de tareas. Además, estoy trabajando en Android Studio desarrollando una aplicación móvil de fletes."}
  </p>
</Col>

      </Row>
    </section>
  );
}
