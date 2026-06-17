import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Work from "./components/Work";

function App() {
  return (
    <div className="bg-[#0a192f] text-gray-300">

      <Navbar />

      {/* prevents navbar overlap */}
      <div className="pt-[80px]">

        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="socials">
          <Socials />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </div>
    </div>
  );
}

export default App;