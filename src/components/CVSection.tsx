import { Briefcase, Code2, Star } from "lucide-react";

const experience = [
  "Desarrollo de aplicaciones web Full Stack bajo el patrón Modelo–Vista–Controlador (MVC) utilizando PHP, Java y JavaScript.",
  "Diseño, construcción y consumo de APIs REST para integración entre sistemas y servicios.",
  "Diseño, normalización y optimización de bases de datos relacionales y consultas SQL orientadas al rendimiento.",
  "Implementación de interfaces modernas, responsivas y accesibles con Tailwind CSS y buenas prácticas de UI.",
  "Integración Frontend–Backend, manejo de estados y validaciones en formularios y flujos de negocio.",
];


const stack = [
  {
    category: "Backend",
    technologies: "Java, PHP, Laravel, MySQL, APIs REST"
  },
  {
    category: "Frontend",
    technologies: "JavaScript, React, Tailwind CSS, HTML5, CSS3"
  },
  {
    category: "Arquitectura",
    technologies: "Modelo–Vista–Controlador (MVC), cliente-servidor, Microservicios"
  },
  {
    category: "Cloud & DevOps",
    technologies: "AWS, Docker, CI/CD, Automatización de despliegues, Monitoreo"
  },  
];

const CVSection = () => {
  return (
    <section id="cv" className="py-24 bg-background">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full border border-border text-muted-foreground">
            Perfil profesional
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Andriely Casallas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desarrollador Full Stack Junior con sólida experiencia en el ciclo
            completo de desarrollo de aplicaciones web, enfocado en soluciones
            eficientes, mantenibles y orientadas a negocio, y Cloud & DevOps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Perfil & Experiencia */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Experiencia profesional
              </h3>
            </div>

            <div className="p-6 rounded-2xl border border-border bg-card mb-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Especialista en PHP y JavaScript bajo el patrón Modelo–Vista–Controlador (MVC),
                con dominio de Tailwind CSS para la construcción de interfaces modernas.
                Capacidad probada para el diseño y consumo de APIs REST, optimización
                de bases de datos relacionales garantizando la continuidad del servicio.
              </p>
            </div>

            <ul className="space-y-3">
              {experience.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stack & Diferencial */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                <Code2 className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">
                Stack técnico
              </h3>
            </div>

            <div className="space-y-4">
              {stack.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-border bg-card"
                >
                  <h4 className="font-medium text-foreground mb-1">
                    {item.category}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.technologies}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl border border-border bg-secondary/50">
              <div className="flex items-center gap-2 mb-3">
                <Star className="w-5 h-5 text-foreground" />
                <h4 className="font-medium text-foreground">
                  Diferencial técnico
                </h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Mi dominio del ciclo completo de desarrollo Full Stack me permite diseñar, implementar y optimizar la comunicación entre Frontend y Backend mediante APIs REST bien definidas, asegurando experiencias de usuario fluidas y arquitecturas de servidor robustas, escalables y mantenibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
