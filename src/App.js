import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Resume from "./Components/Resume";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import { Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
