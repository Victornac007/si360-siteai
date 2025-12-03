import React from 'react';
import { Search, PenTool, Network, RefreshCw, ChevronRight } from 'lucide-react';
import { ProcessStep } from '../types';

const steps: ProcessStep[] = [
  { number: '01', title: 'Diagnóstico', description: 'Evaluación técnica en terreno para identificar puntos críticos de falla física y lógica.' },
  { number: '02', title: 'Implementación', description: 'Despliegue de equipos técnicos certificados para reparación, soldadura y montaje.' },
  { number: '03', title: 'Integración', description: 'Instalación de capas digitales (sensores/software) sobre la infraestructura física.' },
  { number: '04', title: 'Continuidad', description: 'Monitoreo 24/7 mediante dashboards y alertas automatizadas.' },
];

export const Methodology: React.FC = () => {
  return (
    <section className="bg-navy-800 py-24 px-6 border-t border-navy-700" id="metodologia">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Metodología <span className="text-safety">Convergent Loop™</span>
            </h2>
            <p className="text-metallic-300 text-lg">
              Rompemos los "silos de proveedores". Gestionamos el ciclo de vida completo de sus activos, 
              desde el metal hasta el dato.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="font-mono text-safety text-xs border border-safety px-2 py-1">
              ESTÁNDAR ISO COMPLIANT
            </span>
          </div>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-navy-600 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="group">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 bg-navy-900 border-2 border-navy-600 group-hover:border-safety rounded-full flex items-center justify-center transition-colors duration-300 relative">
                     <span className="font-display text-3xl font-bold text-metallic-300 group-hover:text-white transition-colors">
                        {step.number}
                     </span>
                     {/* Icon Overlay */}
                     <div className="absolute -bottom-2 -right-2 bg-navy-800 p-2 rounded-full border border-navy-600">
                        {index === 0 && <Search className="w-5 h-5 text-safety" />}
                        {index === 1 && <PenTool className="w-5 h-5 text-safety" />}
                        {index === 2 && <Network className="w-5 h-5 text-safety" />}
                        {index === 3 && <RefreshCw className="w-5 h-5 text-safety" />}
                     </div>
                  </div>
                  <div className="md:hidden flex-grow h-0.5 bg-navy-600 ml-4"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  {step.title} <ChevronRight className="w-4 h-4 text-safety opacity-0 group-hover:opacity-100 transition-opacity ml-2" />
                </h3>
                <p className="text-metallic-300 text-sm leading-relaxed border-l-2 border-transparent group-hover:border-safety pl-0 group-hover:pl-3 transition-all duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};