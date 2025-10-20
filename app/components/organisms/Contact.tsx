"use client";
import { Row, Col, Card } from "react-bootstrap";
import { Mail, MessageCircle, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const contactMethods = [
    { icon: Mail, title: "Email", value: "fr.mirandam@duocuc.cl", link: "mailto:fr.mirandam@duocuc.cl", tone: "cyan" },
    { icon: MessageCircle, title: "WhatsApp", value: "+56 9 91901294", link: "https://wa.me/56991901294", tone: "cyan" },
    { icon: Linkedin, title: "LinkedIn", value: "Francisca Miranda", link: "https://www.linkedin.com/in/tu-perfil", tone: "peach" },
    { icon: Github, title: "GitHub", value: "@Panchaaowo", link: "https://github.com/Panchaaowo", tone: "peach" },
  ] as const;

  return (
    <section id="contact" className="contact section">
      <h2 className="mb-2">Contacto</h2>
      <p className="text-muted max-62ch mb-4">
        ¿Tienes un proyecto en mente o simplemente quieres conectar? ¡Escríbeme!
      </p>

      {}
      <Row className="g-3">
        {contactMethods.map(({ icon: Icon, title, value, link, tone }) => (
          
          <Col xs={12} md={6} key={title}>
            <Card className="project-card p-3 border-0 h-100">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center gap-3 text-decoration-none w-100 h-100"
              >
                <div
                  className="d-inline-flex align-items-center justify-content-center rounded"
                  style={{
                    width: 44,
                    height: 44,
                    background:
                      tone === "cyan"
                        ? "color-mix(in oklab, var(--primary-500), transparent 88%)"
                        : "color-mix(in oklab, var(--accent-500), transparent 88%)",
                    border: "1px solid var(--line)",
                  }}
                >
                  <Icon
                    size={22}
                    color={tone === "cyan" ? "var(--primary-500)" : "var(--accent-500)"}
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="fw-bold text-white">{title}</div>
                  <div className="small text-muted">{value}</div>
                </div>
                <div
                  className="ms-auto"
                  aria-hidden
                  style={{ color: tone === "cyan" ? "var(--primary-500)" : "var(--accent-500)" }}
                >
                  →
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
