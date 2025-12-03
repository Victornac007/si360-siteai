import React, { useState, useEffect } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Servicios', 'Metodología', 'Proyectos', 'Nosotros'];

  const getSectionId = (name: string) => {
    // Converts "Metodología" to "metodologia", "Servicios" to "servicios"
    return name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md border-b border-navy-700 py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 group cursor-pointer">
          <Hexagon className={`w-8 h-8 ${scrolled ? 'text-safety' : 'text-white'} transition-colors group-hover:rotate-90 duration-500`} fill={scrolled ? 'currentColor' : 'none'} />
          <span className="text-2xl font-display font-bold text-white tracking-wider">SI360°</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${getSectionId(item)}`}
              onClick={(e) => scrollToSection(e, getSectionId(item))}
              className="text-sm font-medium text-metallic-100 hover:text-safety uppercase tracking-widest transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-safety after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
          <Button variant={scrolled ? 'primary' : 'outline'} className="py-2 px-6 text-sm" onClick={() => alert("Portal de Clientes: Redireccionando a entorno seguro...")}>
            Portal Clientes
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white hover:text-safety transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-b border-navy-700 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in-down">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${getSectionId(item)}`}
              onClick={(e) => scrollToSection(e, getSectionId(item))}
              className="text-lg font-bold text-white uppercase tracking-wider hover:text-safety flex justify-between items-center border-b border-navy-800 pb-2"
            >
              {item}
              <Hexagon className="w-4 h-4 text-navy-600" />
            </a>
          ))}
          <Button className="w-full mt-2" onClick={() => { setIsOpen(false); alert("Portal de Clientes: Redireccionando a entorno seguro..."); }}>
            Portal Clientes
          </Button>
        </div>
      )}
    </nav>
  );
};