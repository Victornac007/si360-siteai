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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/95 backdrop-blur-md border-b border-navy-700 py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Hexagon className={`w-8 h-8 ${scrolled ? 'text-safety' : 'text-white'} transition-colors`} fill={scrolled ? 'currentColor' : 'none'} />
          <span className="text-2xl font-display font-bold text-white tracking-wider">SI360°</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Servicios', 'Metodología', 'Proyectos', 'Nosotros'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-metallic-100 hover:text-safety uppercase tracking-widest transition-colors">
              {item}
            </a>
          ))}
          <Button variant={scrolled ? 'primary' : 'outline'} className="py-2 px-6 text-sm">
            Portal Clientes
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-b border-navy-700 p-6 flex flex-col gap-6 shadow-2xl">
          {['Servicios', 'Metodología', 'Proyectos', 'Nosotros'].map((item) => (
            <a key={item} href="#" className="text-lg font-bold text-white uppercase tracking-wider hover:text-safety" onClick={() => setIsOpen(false)}>
              {item}
            </a>
          ))}
          <Button className="w-full">Portal Clientes</Button>
        </div>
      )}
    </nav>
  );
};