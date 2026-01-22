import { Users, MessageSquare, RotateCcw, Eye } from "lucide-react";

const methodologies = [
  {
    icon: RotateCcw,
    title: "Entregas de Alta Prioridad",
    description: "Enfoque inicial intensivo para cumplir con el despliegue del módulo de líderes en el plazo de 2 semanas."
  },
  {
    icon: MessageSquare,
    title: "Comunicación Directa",
    description: "Canal abierto para ajustes rápidos según la dinámica de la campaña y retroalimentación del candidato."
  },
  {
    icon: Users,
    title: "Cumplimiento Normativo",
    description: "Implementación rigurosa de los estándares de la SIG y el CNE en cada fase del desarrollo."
  },
  {
    icon: Eye,
    title: "Transparencia Total",
    description: "Acceso a demos funcionales para validar el ingreso de datos y reportes financieros en tiempo real."
  }
];

const MethodologySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wide uppercase rounded-full bg-accent/10 text-accent">
              Metodología de Trabajo
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display mb-6">
              Agilidad para Tiempos de Campaña
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entiendo que en el entorno electoral el tiempo es crítico. Mi metodología se centra en 
              entregar herramientas funcionales desde la primera semana, permitiendo que el equipo 
              comience la captación de datos mientras se completan los módulos avanzados.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {methodologies.map((method, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <method.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{method.title}</h4>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-card rounded-3xl p-8 card-shadow border border-border shadow-xl">
              <h3 className="text-2xl font-bold text-foreground font-display mb-6">
                Control y Seguimiento
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <span className="font-medium text-foreground">Validación de Módulo 1</span>
                  <span className="text-sm font-bold text-accent">Día 14</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <span className="font-medium text-foreground">Reportes Cuentas Claras</span>
                  <span className="text-sm text-muted-foreground">Cada Hito</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <span className="font-medium text-foreground">Carga de Datos Registraduría</span>
                  <span className="text-sm text-muted-foreground">Fase Final</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                  <span className="font-medium text-foreground">Soporte y Ajustes</span>
                  <span className="text-sm text-muted-foreground">Disponibilidad Inmediata</span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-accent">
                <p className="text-accent-foreground font-medium text-center">
                  🚀 Garantía de despliegue funcional en tiempo récord
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;