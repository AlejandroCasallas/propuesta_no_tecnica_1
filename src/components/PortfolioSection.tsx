import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section id="portafolio" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium rounded-full border border-border text-muted-foreground">
            Portafolio
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Trabajo y proyectos
          </h2>
        </div>

        {/* Portfolio Links */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alejandrocasallas"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-border bg-card hover:border-foreground/30 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-medium text-foreground">
                LinkedIn
              </h3>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Visitar mi perfil en LinkedIn.
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/alejandrocasallas"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-border bg-card hover:border-foreground/30 transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-medium text-foreground">
                GitHub
              </h3>
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Repositorios públicos con ejemplos de código, APIs,
              integraciones y prácticas de desarrollo.
            </p>
          </a>

        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
