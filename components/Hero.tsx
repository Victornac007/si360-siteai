import React from 'react';
import { Button } from './Button';
import { Hexagon, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden border-b border-navy-700">
      
      {/* Left Side: Physical/Hard */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen group">
        <div className="absolute inset-0 bg-navy-900/60 z-10 group-hover:bg-navy-900/50 transition-all duration-700"></div>
        <img 
          src="https://picsum.photos/id/1029/800/1200" 
          alt="Industrial Welder" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute bottom-0 left-0 p-8 z-20 md:hidden">
           <span className="text-safety font-display tracking-widest text-sm border-l-2 border-safety pl-2">EL MUNDO FÍSICO</span>
        </div>
      </div>

      {/* Right Side: Digital/Soft */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen group">
        <div className="absolute inset-0 bg-navy-900/80 z-10 group-hover:bg-navy-900/70 transition-all duration-700"></div>
        {/* Overlaying a 'code' pattern illusion */}
        <div className="absolute inset-0 z-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(#233554 1px, transparent 1px)',
            backgroundSize: '20px 20px'
        }}></div>
        <img 
          src="https://picsum.photos/id/0/800/1200" 
          alt="Server Room Technology" 
          className="w-full h-full object-cover grayscale contrast-125 mix-blend-overlay"
        />
        <div className="absolute top-0 right-0 p-8 z-20 md:hidden text-right">
           <span className="text-safety font-display tracking-widest text-sm border-r-2 border-safety pr-2">EL MUNDO DIGITAL</span>
        </div>
      </div>

      {/* Central Convergence HUD */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full max-w-4xl px-4 text-center">
        
        <div className="relative inline-block mb-6">
          <Hexagon className="w-24 h-24 text-safety fill-navy-900/80 mx-auto animate-pulse" strokeWidth={1.5} />
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-3xl font-bold font-display text-white">SI</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-white uppercase tracking-tight mb-4 drop-shadow-2xl">
          Continuidad <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-metallic-300">Total</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-light text-metallic-100 mb-8 max-w-2xl mx-auto border-t border-b border-navy-600 py-4 bg-navy-900/80 backdrop-blur-sm">
          Protección Física Robusta <span className="text-safety mx-2">+</span> Inteligencia Digital Predictiva
        </h2>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button onClick={scrollToContact}>
            Solicitar Diagnóstico Técnico <ChevronRight className="w-4 h-4" />
          </Button>
          <span className="text-metallic-300 text-sm font-mono mt-2 md:mt-0 md:ml-4">
             v.360.01 // READY
          </span>
        </div>
      </div>
      
      {/* Decorative Grid Lines */}
      <div className="absolute bottom-10 left-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent to-safety/50 z-20 hidden md:block"></div>
      <div className="absolute top-10 right-0 w-1/3 h-[1px] bg-gradient-to-l from-transparent to-safety/50 z-20 hidden md:block"></div>

    </section>
  );
};