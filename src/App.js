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
        <Route path="/mikesportfolio/" element={<Home/>}/>
        <Route path="/mikesportfolio/about" element={<About/>}/>
        <Route path="/mikesportfolio/skills" element={<Skills/>}/>
        <Route path="/mikesportfolio/work" element={<Work/>}/>
        <Route path="/mikesportfolio/contact" element={<Contact/>}/>
      </Routes>
      </div>
  );
}

export default App;
