// app/routes/_index.tsx
import About from "app/components/organisms/About";
import Skills from "app/components/organisms/Skills";
import Projects from "app/components/organisms/Projects";
import Certifications from "app/components/organisms/Certifications";
import Contact from "app/components/organisms/Contact";

export default function Index() {
  return (
    <main style={{ paddingTop: 72 }}>
      <About />
      <Skills />
      <Projects />
      <Certifications /> 
      <Contact />
    </main>
  );
}
