import {
  DollarSign,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck
} from "lucide-react";

/* =======================
   CONTENIDO AJUSTADO AL PROYECTO
======================= */

const included = [
  "Desarrollo de Módulo de Líderes y Votantes",
  "Sistema Financiero bajo normativa CNE",
  "Visualizador de facturas y soportes",
  "Mapa de Calor e inteligencia electoral",
  "Cruce de datos con Censo Registraduría",
  "Optimización de plataforma WordPress actual",
  "Garantía de cumplimiento de Fase 1 en 2 semanas",
];

const notIncluded = [
  "Costo de servidores o Hosting premium",
  "Carga manual de bases de datos físicas",
  "Licencias de plugins de pago adicionales",
  "Mantenimiento post-campaña electoral"
];

const sprints = [
  { name: "Entrega Prioritaria", duration: "Semana 2", focus: "Módulo de líderes y registro SIG" },
  { name: "Módulo Financiero", duration: "Semana 3", focus: "Cuentas Claras y carga de facturas" },
  { name: "Inteligencia Electoral", duration: "Semana 4", focus: "Mapa de calor y datos Registraduría" },
  { name: "Cierre y Despliegue", duration: "Semana 5", focus: "Pruebas de carga y entrega final" }
];

/* =======================
   COMPONENTE
======================= */

const QuoteSection = () => {
  return (
    <section id="cotizacion" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm uppercase tracking-wide rounded-full bg-accent/10 text-accent border border-accent/20">
            Cotización Formal
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Inversión del Proyecto
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Propuesta económica basada en los requerimientos técnicos y de fiscalización electoral.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* =======================
              PRECIO Y PAGOS
          ======================= */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-semibold">Valor Total</h3>
              </div>

              <p className="text-5xl font-bold mb-2">
                $6.0M
                <span className="text-lg font-normal text-white/60"> COP</span>
              </p>

              <div className="space-y-4 mt-8">
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-accent font-bold">Anticipo inicial</span>
                    <span className="text-white font-bold">50%</span>
                  </div>
                  <p className="text-xs text-white/60">Requerido para iniciar el desarrollo y asegurar entrega en 2 semanas.</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white/70">Pago Final</span>
                    <span className="text-white font-bold">50%</span>
                  </div>
                  <p className="text-xs text-white/40">Contra entrega final y satisfacción de todos los módulos.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs text-white/40 italic">
              <ShieldCheck className="w-4 h-4" />
              Seguridad de datos garantizada bajo ley SIG.
            </div>
          </div>

          {/* =======================
              PLANIFICACIÓN (SPRINTS)
          ======================= */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Cronograma</h3>
                <p className="text-white/60 text-sm">Hitos de entrega</p>
              </div>
            </div>

            <div className="space-y-3">
              {sprints.map((sprint, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-accent/30 transition-all"
                >
                  <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{sprint.name}</p>
                    <p className="text-xs text-white/60">{sprint.focus}</p>
                  </div>
                  <span className="text-xs font-mono text-accent">
                    {sprint.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* =======================
              INCLUYE / NO INCLUYE
          ======================= */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              Qué incluye
            </h3>

            <ul className="space-y-2 mb-6">
              {included.map((item, index) => (
                <li
                  key={index}
                  className="text-sm text-white/70 flex gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 pt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-white/40" />
                Qué no incluye
              </h3>

              <ul className="space-y-2">
                {notIncluded.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-white/50 flex gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuoteSection;