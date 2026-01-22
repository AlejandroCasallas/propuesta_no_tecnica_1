import { Users, Landmark, Map, Layout } from "lucide-react";

const scopes = [
  {
    icon: Users,
    title: "Gestión de Líderes y Votantes",
    description:
      "Implementación del sistema central de captación de datos y jerarquización territorial conforme a la normativa SI.",
    items: [
      "Formularios de registro con validación de protección de datos",
      "Asignación de votantes a líderes específicos (ej. Andrés Cristancho)",
      "Segmentación geográfica por Departamento y Municipio",
      "Funcionalidad de exportación de datos para análisis interno"
    ]
  },
  {
    icon: Landmark,
    title: "Módulo Financiero y Auditoría",
    description:
      "Control integral de ingresos y gastos bajo los lineamientos de 'Cuentas Claras' del CNE.",
    items: [
      "Registro detallado de gastos por subpartidas (Vallas, publicidad, etc.)",
      "Visualización de soportes y facturas escaneadas por cada movimiento",
      "Atribución directa de egresos por líder o candidato",
      "Generación de reportes financieros descargables en tiempo real"
    ]
  },
  {
    icon: Map,
    title: "Inteligencia Electoral (Mapa de Calor)",
    description:
      "Visualización avanzada del cumplimiento de metas contrastado con el censo electoral oficia.",
    items: [
      "Integración y cruce de datos con el censo de la Registraduría",
      "Mapa de calor visual para identificar densidad de votación por zona",
      "Monitoreo de cumplimiento: Votantes prometidos vs. registros reales",
      "Filtros dinámicos por región y desempeño individual de líderes"
    ]
  },
  {
    icon: Layout,
    title: "Optimización y Despliegue",
    description:
      "Mejora y complemento de la infraestructura técnica basada en el WordPress actua.",
    items: [
      "Auditoría y finalización de módulos previamente desarrollados",
      "Estructuración técnica para soportar más de 1,000 líderes",
      "Interfaz optimizada para la visualización de reportes urgentes",
      "Garantía de entrega de Fase 1 (Registro) en un plazo de 2 semanas"
    ]
  }
];

const ScopeSection = () => {
  return (
    <section id="alcances" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full bg-accent/10 text-accent">
            Alcance del servicio
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
            ¿Qué incluye esta propuesta?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alcance técnico definido con base en los requerimientos específicos 
            de la campaña y la estructura de control de líderes solicitada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scopes.map((scope, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/30 transition-all"
            >
              <div className="flex items-start gap-5">
                
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <scope.icon className="w-7 h-7 text-accent" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {scope.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {scope.description}
                  </p>

                  <ul className="space-y-2">
                    {scope.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ScopeSection;