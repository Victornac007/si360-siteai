import React from 'react';
import { ArrowUpRight, ShieldCheck, Cpu, Database } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Retrofitting Planta Minera",
      client: "Sector Minería | Antofagasta",
      description: "Refuerzo estructural de correas transportadoras e implementación de sensores IoT para medición de vibraciones en tiempo real.",
      techs: ["Soldadura SMAW", "Sensores LoraWAN", "Dashboard Azure"],
      stats: "35% Reducción fallas",
      icon: ShieldCheck
    },
    {
      title: "Data Center Cooling IA",
      client: "Banca Corporativa | Santiago",
      description: "Automatización del sistema de climatización y control de acceso físico blindado para sala de servidores críticos.",
      techs: ["HVAC Industrial", "Biometría", "Python AI Model"],
      stats: "99.99% Uptime",
      icon: Database
    },
    {
      title: "Logística Automatizada",
      client: "Retail Mayorista | Pudahuel",
      description: "Diseño y fabricación de estructuras de soporte para brazos robóticos y desarrollo de software de integración SCADA.",
      techs: ["Mecánica de Suelos", "API REST", "PLC Integration"],
      stats: "200% Eficiencia",
      icon: Cpu
    }
  ];

  return (
    <section className="bg-navy-900 py-24 px-6 border-t border-navy-700 relative" id="proyectos">
       {/* Background Elements */}
       <div className="absolute top-0 right-0 w-64 h-64 bg-safety/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-safety font-mono text-sm tracking-widest uppercase">Casos de Éxito</span>
            <h2 className="text-4xl font-display font-bold text-white mt-2">
              Ingeniería <span className="text-metallic-300">Aplicada</span>
            </h2>
          </div>
          <button className="text-metallic-300 hover:text-white flex items-center gap-2 mt-4 md:mt-0 transition-colors uppercase text-sm font-bold tracking-wider">
            Ver Portafolio Completo <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative bg-navy-800 border border-navy-700 hover:border-safety/50 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-safety transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                   <div className="p-3 bg-navy-900 border border-navy-600 rounded">
                      <project.icon className="w-6 h-6 text-white group-hover:text-safety transition-colors" />
                   </div>
                   <span className="font-mono text-xs text-safety border border-safety/30 bg-safety/5 px-2 py-1 rounded">
                     {project.stats}
                   </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-metallic-300/80 mb-4 font-mono uppercase tracking-wide">{project.client}</p>
                
                <p className="text-metallic-300 mb-6 text-sm leading-relaxed border-b border-navy-700 pb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, i) => (
                    <span key={i} className="text-xs text-metallic-300 bg-navy-900 px-2 py-1 rounded border border-navy-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};