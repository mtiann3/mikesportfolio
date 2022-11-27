import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="https://mikeiannotti55.github.io/mikesportfolio" element={<Home/>}/>
        <Route path="https://mikeiannotti55.github.io/mikesportfolio/about" element={<About/>}/>
        <Route path="https://mikeiannotti55.github.io/mikesportfolio/skills" element={<Skills/>}/>
        <Route path="https://mikeiannotti55.github.io/mikesportfolio/work" element={<Work/>}/>
        <Route path="https://mikeiannotti55.github.io/mikesportfolio/contact" element={<Contact/>}/>
      </Routes>
      </div>
  );
}

export default App;
