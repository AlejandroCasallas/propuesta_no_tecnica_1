import { Key, Wallet, PlayCircle, ShieldAlert } from "lucide-react";

const startupConditions = [
  {
    icon: Wallet,
    title: "Compromiso Financiero",
    description: "El proyecto inicia oficialmente tras la confirmación del pago del 50% de anticipo ($3.000.000 COP)."
  },
  {
    icon: Key,
    title: "Acceso a Infraestructura",
    description: "Entrega de credenciales de administración del WordPress actual y acceso al hosting/servidor para la auditoría técnica."
  },
  {
    icon: PlayCircle,
    title: "Activación del Cronograma",
    description: "El plazo pactado de 2 semanas para la Fase 1 comenzará a correr a partir del día hábil siguiente a la entrega del 100% de los accesos e insumos."
  },
  {
    icon: ShieldAlert,
    title: "Insumos de Información",
    description: "Disponibilidad de las bases de datos de la Registraduría y formatos del CNE necesarios para la parametrización de los módulos."
  }
];

const TermsSection = () => {
  return (
    <section className="py-20 bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Condiciones de Inicio
            </h3>
            <p className="text-muted-foreground">
              Para garantizar el cumplimiento de los tiempos de entrega, se requiere completar los siguientes puntos:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {startupConditions.map((condition, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <condition.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{condition.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {condition.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl border-2 border-dashed border-accent/30 bg-accent/5">
            <p className="text-sm text-center text-muted-foreground">
              <span className="font-bold text-foreground">Nota sobre el tiempo de entrega:</span> Cualquier demora en la entrega de credenciales o el pago del anticipo desplazará automáticamente la fecha de entrega final, con el fin de no comprometer la calidad técnica de la plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;