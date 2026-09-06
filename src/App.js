import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Chicago from "./assets/chicago.webp";
import Focus from "./components/Focus";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-50">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Chicago})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[#06101e]/80"
      />

      <div className="relative z-10 min-h-screen">
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-red-600 px-4 py-2 font-semibold text-white transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <Navbar />

        <main id="main-content" tabIndex={-1} className="pt-[80px]">
          <section id="home">
            <Home />
          </section>

          <section id="about">
            <About />
          </section>
          <section id="focus">
            <Focus />
          </section>

          <section id="experience">
            <Experience />
          </section>
          <section id="education">
            <Education />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
