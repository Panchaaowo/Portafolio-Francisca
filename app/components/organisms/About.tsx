"use client";
import { motion } from "framer-motion";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="section position-relative">
      {/* Resplandor de fondo (usa tu --primary-500) */}
      <div
        aria-hidden
        className="position-absolute rounded-circle"
        style={{
          pointerEvents: "none",
          width: 700,
          height: 700,
          left: "20%",
          top: "15%",
          transform: "translate(-30%, -20%)",
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--primary-500) 40%, transparent), transparent 70%)",
          filter: "blur(120px)",
          opacity: 0.35,
          zIndex: 0,
        }}
      />

      <Container className="position-relative" style={{ zIndex: 1 }}>
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center section-title-neon"
        >
          Sobre mí
        </motion.h2>

        <Row className="align-items-center g-4 g-lg-5">
          {/* Imagen */}
          <Col md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="d-flex justify-content-center"
            >
              <div className="position-relative">
                {/* halo */}
                <div
                  aria-hidden
                  className="position-absolute w-100 h-100 rounded-4"
                  style={{
                    inset: 0,
                    filter: "blur(24px)",
                    background:
                      "linear-gradient(180deg, color-mix(in oklab, var(--primary-500) 20%, transparent), transparent)",
                    opacity: 0.6,
                  }}
                />
                <Card className="p-2 border-0" style={{ background: "transparent" }}>
                  <Image
                    src="app/assts/img/yo.png"
                    alt="Foto de perfil"
                    rounded
                    className="border"
                    style={{
                      display: "block",
                      width: 320,
                      height: 320,
                      objectFit: "cover",
                      borderRadius: 16,
                      borderColor: "var(--line)",
                      borderWidth: 2,
                    }}
                    onError={(e: any) => {
                      e.currentTarget.src =
                        "data:image/svg+xml," +
                        encodeURIComponent(
                          `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320'>
                            <rect width='100%' height='100%' rx='16' fill='#0d131a'/>
                            <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                              fill='#7a8699' font-family='sans-serif' font-size='14'>Sin imagen</text>
                           </svg>`
                        );
                    }}
                  />
                </Card>
              </div>
            </motion.div>
          </Col>

          {/* Texto */}
         {/* Texto */}
<Col md={7}>
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.3 }}
    className="d-grid gap-3"
  >
    <p className="about-text mb-0">
     Soy Francisca, estudiante de Ingeniería en Informática (4.º semestre). El semestre pasado me enfoqué en desarrollo backend, experiencia que disfruté y que fortaleció mi lógica, la organización del código y la resolución de problemas. Me caracterizo por ser colaborativa, con alta adaptabilidad a distintos entornos.
Además, cuento con experiencia en atención al cliente (KFC y Burger King) y como productora de alimentos en Trendy, donde desarrollé comunicación efectiva, disciplina y orientación al servicio. Me motiva seguir aprendiendo, crear soluciones de valor y crecer profesionalmente combinando lo técnico con un trato cercano y empático.
    </p>

    <p className="about-text mb-0">
      Actualmente me desempeño como desarrolladora Full Stack con React. Utilizo Bootstrap para estilos y componentes, y React Router para la navegación. En bases de datos trabajo con Oracle PL/SQL (packages, procedimientos y triggers) para reglas de negocio, validaciones y automatización de tareas. Paralelamente, desarrollo una aplicación móvil de fletes en Android Studio (Kotlin)
    </p>
  </motion.div>
</Col>

        </Row>
      </Container>
    </section>
  );
}
