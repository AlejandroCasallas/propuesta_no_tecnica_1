import { ExternalLink, Github, Instagram, Linkedin } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full border border-border text-muted-foreground">
            Conectemos
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Perfiles públicos
          </h2>
        </div>

        {/* Portfolio Links */}
        {/* Cambié md:grid-cols-2 a lg:grid-cols-3 para que los 3 queden en fila en desktop */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alejandrocasallas"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-border bg-card hover:border-foreground/30 transition shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-medium text-foreground">LinkedIn</h3>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trayectoria profesional, red de contactos y actualizaciones del sector tecnológico.
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/TU_USUARIO" // Reemplaza con tu usuario real
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-border bg-card hover:border-foreground/30 transition shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-medium text-foreground">Instagram</h3>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Día a día del desarrollo, procesos creativos y actualizaciones de proyectos.
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/alejandrocasallas"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-border bg-card hover:border-foreground/30 transition shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Github className="w-5 h-5 text-accent" />
                <h3 className="text-xl font-medium text-foreground">GitHub</h3>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Repositorios públicos con ejemplos de código, arquitecturas y prácticas de desarrollo.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
