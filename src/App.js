import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Work from "./components/Work";
import Chicago from "./assets/chicago.jpg";

function App() {
  return (
    <div
      className="text-gray-300 min-h-screen bg-no-repeat bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${Chicago})` }}
    >
      {/* overlay for readability */}
      <div className="min-h-screen bg-black/60">
        
        <Navbar />

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
    </div>
  );
}

export default App;