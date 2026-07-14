import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Experience from "./components/Experience";
import Chicago from "./assets/chicago.jpg";
import Focus from "./components/Focus";
import Education from "./components/Education";

function App() {
  return (
    <div
      className="text-slate-100 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${Chicago})` }}
    >
      {/* overlay for readability */}
      <div className="min-h-screen bg-black/80">
        <Navbar />

        <div className="pt-[80px]">
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
      

          {/* <section id="contact">
            <Contact />
          </section> */}
        </div>
      </div>
    </div>
  );
}

export default App;
