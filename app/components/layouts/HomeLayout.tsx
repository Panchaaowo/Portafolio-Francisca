// app/components/molecules/HomeLayout.tsx
import { Container } from "react-bootstrap";
import Header from "app/components/molecules/Header";  // Asegúrate de que este sea el componente correcto de Header
import Hero from "app/components/organisms/Hero";
import About from "app/components/organisms/About";
import Projects from "app/components/organisms/Projects";
import Skills from "app/components/organisms/Skills";
import Certifications from "app/components/organisms/Certifications";
import Contact from "app/components/organisms/Contact";

export default function HomeLayout() {
  return (
    <>
      <Header /> {/* Aquí se incluirá tu barra de navegación */}
      <main className="main-content bg-dark text-light py-5">
        <Container>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certifications /> {/* Aquí se coloca entre Projects y Contact */}
          <Contact />
        </Container>
      </main>
      <footer className="bg-black text-center text-secondary py-4">
        <small>© {new Date().getFullYear()} Francisca Miranda — Portafolio</small>
      </footer>
    </>
  );
}
