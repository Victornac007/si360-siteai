import React from 'react';
import { Button } from './Button';
import { Phone, MapPin, Mail, Hexagon, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 border-t-4 border-safety pt-20 pb-10 px-6" id="contacto">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: CTA & Social Proof */}
        <div className="flex flex-col lg:flex-row gap-12 justify-between items-start mb-20">
          <div className="max-w-xl">
             <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
               ¿Listo para blindar su operación?
             </h2>
             <p className="text-metallic-300 mb-8">
               Hablemos de Ingeniería Aplicada. Agende una visita técnica sin costo para evaluar su infraestructura actual.
             </p>
             <Button variant="primary" onClick={() => window.location.href = 'mailto:contacto@si360.cl'}>
               Contactar a un Ingeniero
             </Button>
          </div>

          <div className="w-full lg:w-auto">
             <h3 className="text-sm font-mono text-metallic-300 uppercase tracking-widest mb-6 border-b border-navy-700 pb-2">
               Sectores que confían en SI360°
             </h3>
             <div className="flex flex-wrap gap-6 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Simulated Logo Placeholders with Text */}
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-metallic-300/20 rounded-full"></div>
                   <span className="font-display font-bold text-lg text-white">BANCA</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-metallic-300/20 rounded-full"></div>
                   <span className="font-display font-bold text-lg text-white">RETAIL</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-metallic-300/20 rounded-full"></div>
                   <span className="font-display font-bold text-lg text-white">MINERÍA</span>
                </div>
             </div>
          </div>
        </div>

        <div className="h-px w-full bg-navy-700 mb-12"></div>

        {/* Bottom Section: Contact & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
                <Hexagon className="w-8 h-8 text-safety fill-safety" />
                <span className="text-2xl font-display font-bold text-white">SI360°</span>
             </div>
             <p className="text-metallic-300 text-sm">
               Soluciones Integrales 360 SpA.
               Santiago, Chile.
             </p>
             <div className="flex gap-4 mt-4">
               <Linkedin className="w-5 h-5 text-metallic-300 hover:text-white cursor-pointer" />
               <Twitter className="w-5 h-5 text-metallic-300 hover:text-white cursor-pointer" />
             </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-metallic-300 hover:text-safety transition-colors cursor-pointer">
                <Phone className="w-4 h-4" /> +56 9 4250 1330
              </li>
              <li className="flex items-center gap-3 text-metallic-300 hover:text-safety transition-colors cursor-pointer">
                <MapPin className="w-4 h-4" /> Providencia, RM
              </li>
              <li className="flex items-center gap-3 text-metallic-300 hover:text-safety transition-colors cursor-pointer">
                <Mail className="w-4 h-4" /> contacto@si360.cl
              </li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Enlaces</h4>
             <ul className="space-y-2 text-metallic-300 text-sm">
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios Industriales</a></li>
                <li><a href="#proyectos" className="hover:text-white transition-colors">Casos de Éxito</a></li>
                <li><a href="#metodologia" className="hover:text-white transition-colors">Nuestra Metodología</a></li>
                <li><a href="#" onClick={(e) => {e.preventDefault(); alert('Login Portal');}} className="hover:text-white transition-colors">Área Clientes</a></li>
             </ul>
          </div>

          <div className="col-span-1 md:col-span-1">
             <div className="bg-navy-800 p-4 border border-navy-700">
                <p className="text-xs text-metallic-300 mb-2 font-mono">ESTADO DEL SISTEMA</p>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-green-500 font-bold text-sm">OPERACIONAL</span>
                </div>
                <p className="text-xs text-metallic-300 mt-2 font-mono">
                   SLA Actual: 99.98%
                </p>
             </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-metallic-300/50">
           <p>© 2024 SI360°. Todos los derechos reservados.</p>
           <p>Diseñado para Ingeniería de Alto Nivel.</p>
        </div>

      </div>
    </footer>
  );
};