import { Zap, ShieldCheck, Map, Database, FileText, ArrowRight, Server, Layout } from "lucide-react";

const technicalItems = [
  {
    icon: Database,
    title: "Estructura de Datos y SIG",
    subtitle: "SQL + Cumplimiento Circular SIG",
    recommendation: "Prioridad 1",
    content: {
      description:
        "Diseño de una arquitectura de base de datos robusta que cumpla con la normativa de protección de datos solicitada.",
      approach: [
        {
          label: "Gestión de Consentimiento",
          detail:
            "Implementación de logs de auditoría para cada registro, capturando el 'check' de autorización de tratamiento de datos según la circular de la SIG."
        },
        {
          label: "Jerarquía de Líderes",
          detail:
            "Modelado de relaciones relacionales para vincular miles de votantes a líderes específicos (ej. Andrés Cristancho) sin pérdida de rendimiento."
        },
        {
          label: "Escalabilidad",
          detail:
            "Optimización de tablas para soportar el crecimiento proyectado de hasta 1,000 líderes nacionales con consultas indexadas por territorio."
        }
      ]
    }
  },
  {
    icon: Map,
    title: "Motor de Inteligencia Electoral",
    subtitle: "Mapas de Calor + Censo",
    recommendation: "Valor Agregado",
    content: {
      description:
        "Desarrollo de la lógica de cruce de información entre la captación real y el censo de la Registraduría.",
      approach: [
        {
          label: "Visualización Geoespacial",
          detail:
            "Uso de librerías de mapas para generar intensidades de color basadas en el porcentaje de cumplimiento de metas por municipio."
        },
        {
          label: "Integración de Censo",
          detail:
            "Procesamiento de bases de datos externas de la Registraduría para validar el potencial electoral frente a los registros captados."
        }
      ]
    }
  },
  {
    icon: FileText,
    title: "Módulo Financiero y Auditoría",
    subtitle: "Cuentas Claras CNE",
    recommendation: "Cumplimiento Legal",
    content: {
      description:
        "Sistema de registro contable con soporte documental integrado para fiscalización.",
      approach: [
        {
          label: "Subpartidas CNE",
          detail:
            "Estructuración de categorías de gasto (vallas, publicidad, etc.) parametrizadas según el manual del Consejo Nacional Electoral."
        },
        {
          label: "Repositorio de Soportes",
          detail:
            "Gestión de archivos escaneados vinculados a registros contables con visualización rápida desde el dashboard de auditoría."
        }
      ]
    }
  },
  {
    icon: Layout,
    title: "Optimización WordPress Core",
    subtitle: "Backend & Complementación",
    recommendation: "Eficiencia Técnica",
    content: {
      description:
        "Aprovechamiento y corrección de la instalación actual para acelerar la entrega de la Fase 1.",
      approach: [
        {
          label: "Auditoría de Código",
          detail:
            "Revisión y limpieza de los módulos 'a medias' para asegurar que la nueva lógica sea compatible y estable."
        },
        {
          label: "Panel Administrativo",
          detail:
            "Customización del área de administración para que el equipo de campaña pueda descargar reportes Excel/PDF con un clic."
        }
      ]
    }
  }
];

const TechnicalSection = () => {
  return (
    <section id="tecnico" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium tracking-wide uppercase rounded-full bg-primary/10 text-primary">
            Documento Técnico
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display mb-4">
            Propuesta Técnica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enfoque técnico realista y orientado a una primera versión funcional.
          </p>
        </div>

        <div className="space-y-8">
          {technicalItems.map((item, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl card-shadow border border-border overflow-hidden"
            >
              <div className="p-6 border-b border-border bg-secondary/30">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl accent-gradient flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className="text-xl font-bold text-foreground font-display">
                        {item.title}
                      </h3>
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent">
                        {item.recommendation}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{item.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-6">
                  {item.content.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {item.content.approach.map((approach, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <ArrowRight className="w-4 h-4 text-accent" />
                        <h4 className="font-semibold text-foreground text-sm">
                          {approach.label}
                        </h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {approach.detail}
                      </p>
                    </div>
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

export default TechnicalSection;
