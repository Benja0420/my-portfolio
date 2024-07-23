import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx"
import Projects from "./components/Projects.jsx"
import Skills from "./components/Skills.jsx"
import About from "./components/About.jsx"
import MarqueeBar from "./components/MarqueeBar.jsx";



export default function App( ) {
  return (
    <>
    <MarqueeBar />
    <Navbar />
    <Home />
    <Projects />
    <Skills />
    <About />
    </>
  )
}