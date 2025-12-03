import React from 'react';
import { Hammer, Zap, Shield, Warehouse, Cpu, Wifi, BarChart3, Database } from 'lucide-react';
import { ServiceItem } from '../types';

const physicalServices: ServiceItem[] = [
  { id: 'p1', title: 'Soldadura Industrial', description: 'Reparación estructural de alto tonelaje y certificación.', icon: Hammer },
  { id: 'p2', title: 'Redes Eléctricas', description: 'Instalación y certificación de media/baja tensión.', icon: Zap },
  { id: 'p3', title: 'Seguridad Física', description: 'Barreras automatizadas, portones y control de acceso.', icon: Shield },
  { id: 'p4', title: 'Infraestructura', description: 'Mantenimiento HVAC y obras civiles menores.', icon: Warehouse },
];

const digitalServices: ServiceItem[] = [
  { id: 'd1', title: 'Monitoreo IoT', description: 'Sensores en tiempo real para mantenimiento predictivo.', icon: Wifi },
  { id: 'd2', title: 'Desarrollo a Medida', description: 'Software corporativo y automatización de procesos.', icon: Cpu },
  { id: 'd3', title: 'Dashboards BI', description: 'Visualización de datos operativos para toma de decisiones.', icon: BarChart3 },
  { id: 'd4', title: 'Integración API', description: 'Conexión entre maquinaria legacy y sistemas modernos.', icon: Database },
];

const ServiceCard: React.FC<{ item: ServiceItem; type: 'physical' | 'digital' }> = ({ item, type }) => (
  <div className={`
    relative group p-6 border transition-all duration-300 hover:-translate-y-1
    ${type === 'physical' ? 'border-navy-600 hover:border-safety/50 bg-navy-800/50' : 'border-navy-600 hover:border-blue-400/50 bg-navy-800/30'}
  `}>
    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
       <item.icon className="w-24 h-24" />
    </div>
    
    <div className={`mb-4 inline-flex p-3 rounded-lg ${type === 'physical' ? 'bg-safety/10 text-safety' : 'bg-blue-400/10 text-blue-400'}`}>
      <item.icon className="w-8 h-8" />
    </div>
    
    <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-wide">
      {item.title}
    </h3>
    <p className="text-metallic-300 text-sm leading-relaxed">
      {item.description}
    </p>
    
    <div className={`absolute bottom-0 left-0 w-0 h-1 transition-all duration-300 group-hover:w-full ${type === 'physical' ? 'bg-safety' : 'bg-blue-400'}`}></div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section className="bg-navy-900 py-24 px-6 relative overflow-hidden" id="servicios">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 z-0 opacity-5" style={{
         backgroundImage: 'linear-gradient(rgba(252, 163, 17, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(252, 163, 17, 0.1) 1px, transparent 1px)',
         backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-safety font-mono text-sm tracking-widest uppercase">Nuestras Capacidades</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mt-2">
            La Matriz de Servicios <span className="text-safety">360°</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Physical Column */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-navy-700 pb-4">
              <div className="h-2 w-2 bg-safety rounded-full animate-ping"></div>
              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">Infraestructura Crítica</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {physicalServices.map(s => <ServiceCard key={s.id} item={s} type="physical" />)}
            </div>
          </div>

          {/* Digital Column */}
          <div>
             <div className="flex items-center gap-4 mb-8 border-b border-navy-700 pb-4">
              <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse"></div>
              <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">Ecosistema Digital</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {digitalServices.map(s => <ServiceCard key={s.id} item={s} type="digital" />)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};