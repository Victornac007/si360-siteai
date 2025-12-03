import React from 'react';
import { Hexagon } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="bg-navy-800 py-24 px-6 relative overflow-hidden" id="nosotros">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10" style={{
         backgroundImage: 'linear-gradient(#0A192F 1px, transparent 1px), linear-gradient(90deg, #0A192F 1px, transparent 1px)',
         backgroundSize: '20px 20px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
               <Hexagon className="w-6 h-6 text-safety fill-safety" />
               <span className="font-mono text-safety tracking-widest uppercase">Sobre Nosotros</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-8">
              No somos solo una consultora.<br />
              <span className="text-metallic-300">Somos la interfaz entre el acero y el algoritmo.</span>
            </h2>

            <div className="space-y-6 text-metallic-100 text-lg leading-relaxed">
              <p>
                SI360° nació de una frustración común en la industria chilena: la desconexión entre los equipos de mantenimiento físico y los departamentos de TI.
              </p>
              <p>
                Mientras unos soldaban vigas, otros escribían código. Nadie hablaba el mismo idioma. <strong className="text-white">Nosotros sí.</strong>
              </p>
              <p>
                Nuestro equipo está compuesto por ingenieros civiles, soldadores certificados y desarrolladores full-stack trabajando en la misma mesa. Esta sinergia nos permite ofrecer soluciones que resisten tanto el peso de la maquinaria como la carga de datos.
              </p>
            </div>

            <div className="mt-10 flex gap-8 border-t border-navy-600 pt-8">
              <div>
                <span className="block text-3xl font-display font-bold text-white">10+</span>
                <span className="text-sm text-metallic-300 uppercase tracking-wider">Años Experiencia</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-bold text-white">50+</span>
                <span className="text-sm text-metallic-300 uppercase tracking-wider">Proyectos Críticos</span>
              </div>
              <div>
                <span className="block text-3xl font-display font-bold text-white">24/7</span>
                <span className="text-sm text-metallic-300 uppercase tracking-wider">Soporte Operativo</span>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] border border-navy-600 bg-navy-900 p-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-navy-900 via-transparent to-transparent z-10"></div>
            <img 
              src="https://picsum.photos/id/1073/800/1000" 
              alt="Engineers collaborating" 
              className="w-full h-full object-cover grayscale opacity-60 hover:opacity-80 transition-opacity duration-500"
            />
            
            {/* Overlay Card */}
            <div className="absolute bottom-8 right-8 bg-navy-800/90 backdrop-blur border border-navy-600 p-6 max-w-xs z-20">
               <p className="font-display font-bold text-white italic text-lg">
                 "La verdadera transformación digital comienza cuando te ensucias las manos en terreno."
               </p>
               <p className="text-safety text-sm mt-4 font-mono">
                 — DIRECTOR DE OPERACIONES
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};