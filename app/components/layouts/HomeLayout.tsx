// app/components/molecules/HomeLayout.tsx
import { Container } from "react-bootstrap";
import Header from "app/components/atoms/HeaderActions";
import Hero from "app/components/organisms/Hero";
import About from "app/components/organisms/About";
import Projects from "app/components/organisms/Projects";
import Skills from "app/components/organisms/Skills";
import Certifications from "app/components/organisms/Certifications"; // ← NUEVO
import Contact from "app/components/organisms/Contact";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <main className="bg-dark text-light py-5" style={{ minHeight: "100vh" }}>
        <Container>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications /> {/* ← AQUÍ, entre Projects y Contact */}
          <Contact />
        </Container>
      </main>
      <footer className="bg-black text-center text-secondary py-4">
        <small>© {new Date().getFullYear()} Francisca Miranda — Portafolio</small>
      </footer>
    </>
  );
}
