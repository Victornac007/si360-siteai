import React from 'react';
import { AlertTriangle, Activity, Lock } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="bg-navy-800 border-b border-navy-700 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-start gap-4 mb-4">
                <AlertTriangle className="text-safety w-8 h-8 flex-shrink-0 mt-1" />
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase">
                  El costo del tiempo de inactividad es inaceptable
                </h3>
             </div>
             <p className="text-metallic-300 text-lg leading-relaxed pl-12 border-l border-navy-600">
                En operaciones críticas, cada fallo representa pérdidas millonarias y riesgos de seguridad. 
                Usted no necesita más proveedores desconectados; necesita un socio estratégico que entienda 
                tanto la soldadura de una estructura como el código que la monitorea.
             </p>
          </div>

          <div className="col-span-1 flex flex-col gap-4 border border-navy-600 p-6 bg-navy-900/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -right-10 -top-10 w-20 h-20 bg-safety/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-navy-800 rounded border border-navy-600">
                <Activity className="text-emerald-400 w-6 h-6" />
              </div>
              <span className="font-mono text-sm text-emerald-400">UPTIME: 99.9% TARGET</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-navy-800 rounded border border-navy-600">
                <Lock className="text-safety w-6 h-6" />
              </div>
              <span className="font-mono text-sm text-safety">SINGLE POINT OF CONTACT</span>
            </div>

            <p className="text-white font-bold mt-2">
              SI360° es su única línea de defensa.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};