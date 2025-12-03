import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Methodology />
        <Projects />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;