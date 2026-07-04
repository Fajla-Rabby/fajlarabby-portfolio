import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Skills from './components/Skills.jsx'
import Process from './components/Process.jsx'
import Proof from './components/Proof.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { Divider } from './components/Icons.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Divider />
        <CaseStudies />
        <Divider />
        <Skills />
        <Divider />
        <Process />
        <Divider />
        <Proof />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
