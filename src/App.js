import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import Work from "./components/Work";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Work/>
        <Socials/>
        <Contact/>
      </div>
  );
}

export default App;
