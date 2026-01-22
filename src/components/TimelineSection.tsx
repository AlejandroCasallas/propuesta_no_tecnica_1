import { Calendar, CheckCircle2 } from "lucide-react";

const phases = [
  {
    phase: "Fase 1",
    title: "Módulo de Registro y Líderes",
    duration: "Semanas 1 - 2",
    description:
      "Prioridad alta: Auditoría de la base actual en WordPress y despliegue del sistema de captación de votantes con jerarquización territorial.",
    deliverables: [
      "Formulario de registro con validación de datos (SIG)",
      "Sistema de asignación a líderes específicos",
      "Base de datos segmentada por Municipio y Departamento",
      "Funcionalidad de exportación de datos para análisis interno"
    ]
  },
  {
    phase: "Fase 2",
    title: "Módulo Financiero (Cuentas Claras)",
    duration: "Semana 3",
    description:
      "Implementación del sistema de gestión de egresos bajo normativa del CNE y visualización de soportes.",
    deliverables: [
      "Registro de gastos por subpartidas y categorías",
      "Módulo de visualización de facturas escaneadas",
      "Reportes financieros descargables",
      "Asociación de presupuestos ejecutados por líder"
    ]
  },
  {
    phase: "Fase 3",
    title: "Inteligencia Electoral y Mapas",
    duration: "Semana 4",
    description:
      "Integración de datos externos de la Registraduría y visualización de métricas de cumplimiento.",
    deliverables: [
      "Cruce de información con censo electoral oficial",
      "Tablero con Mapa de Calor por cumplimiento de metas",
      "Filtros de análisis de rendimiento por zona y líder",
      "Dashboard comparativo de votantes prometidos vs. reales"
    ]
  },
  {
    phase: "Fase 4",
    title: "Pruebas Finales y Entrega",
    duration: "Semana 5",
    description:
      "Validación total del sistema, ajustes de escalabilidad para 1,000+ líderes y entrega final.",
    deliverables: [
      "Pruebas de estrés y carga de usuarios masiva",
      "Capacitación de uso de la plataforma para administradores",
      "Manual básico de administración de datos",
      "Cierre de proyecto y despliegue final"
    ]
  }
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Cronograma
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Timeline del proyecto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plan de trabajo estimado con una duración total de mes y medio.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background -translate-x-1/2 z-10" />

                <div
                  className={`flex-1 ml-16 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:pl-16"
                  }`}
                >
                  <div
                    className={`bg-card rounded-2xl p-6 border border-border ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="px-3 py-1 text-xs font-bold uppercase rounded-full accent-gradient text-accent-foreground">
                        {phase.phase}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {phase.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {phase.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {phase.description}
                    </p>

                    <div className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2 text-sm text-muted-foreground ${
                            index % 2 === 0 ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
