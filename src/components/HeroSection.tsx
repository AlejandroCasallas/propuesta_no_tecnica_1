import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-neutral-950 overflow-hidden">
      
      {/* Background subtle accents */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-32 right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full border border-white/10 text-white/70">
          Propuesta personalizada
        </span>
        
        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight">
          Implementación de Plataforma Digital
          <span className="block text-white/60 mt-2 text-2xl md:text-3xl font-normal">
            Diseñada específicamente para este proyecto
          </span>
        </h1>
        
        <p className="text-lg text-white/60 max-w-xl mx-auto mb-12">
          Este documento presenta el alcance, la planificación y la estructura
          de la solución propuesta, adaptada a las necesidades actuales del cliente.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#alcances" 
            className="px-8 py-4 text-base font-medium rounded-lg bg-white text-neutral-900 hover:bg-white/90 transition"
          >
            Revisar alcance
          </a>
          <a 
            href="#timeline" 
            className="px-8 py-4 text-base font-medium rounded-lg border border-white/20 text-white hover:bg-white/5 transition"
          >
            Ver planificación
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50">
        <ArrowDown className="w-5 h-5 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
