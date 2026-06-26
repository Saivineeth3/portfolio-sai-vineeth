import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-background text-white selection:bg-accent selection:text-black">
      {/* Background Globs/Blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      {/* Dot Grid Layer */}
      <div className="fixed inset-0 bg-dot-grid opacity-30 pointer-events-none z-[-1]"></div>

      <Navbar />
      
      <main>
        <Hero />
        <Education />
        <Certifications />
        <Projects />
        <Skills />
        <Services />
      </main>

      <Contact />
    </div>
  );
}

export default App;
