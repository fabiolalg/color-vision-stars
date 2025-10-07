import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import { BookOpen, ExternalLink } from "lucide-react";

interface RecursosProps {
  language: 'es' | 'en';
}

const Recursos = ({ language }: RecursosProps) => {
  const content = {
    es: {
      hero: {
        title: "Recursos y Descargas",
        subtitle: "Materiales educativos, guías y herramientas para familias y educadores",
      },
      quickLinks: {
        title: "Recursos Principales",
        subtitle: "Enlaces útiles y herramientas para familias y educadores",
      },
      links: {
        title: "Enlaces Útiles",
        items: [
          {
            title: "ColorADD",
            description: "Sistema universal de identificación de colores para daltónicos",
            url: "https://www.coloradd.net/",
          },
          {
            title: "Enchroma - Test de Daltonismo",
            description: "Test online gratuito e información sobre tipos de daltonismo",
            url: "https://enchroma.com/pages/color-blindness-test",
          },
          {
            title: "Coblis - Simulador de Daltonismo",
            description: "Herramienta para ver cómo perciben los colores las personas con daltonismo",
            url: "https://www.color-blindness.com/coblis-color-blindness-simulator/",
          },
          {
            title: "Colour Blind Awareness",
            description: "Organización británica con recursos educativos y de concientización",
            url: "https://www.colourblindawareness.org/",
          },
          {
            title: "National Eye Institute (NEI)",
            description: "Información médica confiable sobre daltonismo del gobierno de EE.UU.",
            url: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness",
          },
          {
            title: "Fundación de Apoyo al Daltónico",
            description: "Recursos y apoyo para personas con daltonismo en España",
            url: "https://www.daltonicos.org/",
          },
        ],
      },
      apps: {
        title: "Aplicaciones Móviles Recomendadas",
        items: [
          {
            name: "Color Blind Pal",
            description: "Identifica colores usando la cámara del teléfono",
          },
          {
            name: "ColorVisor",
            description: "Asistente visual con filtros personalizables",
          },
          {
            name: "Chromatic Vision Simulator",
            description: "Simula cómo ve una persona con daltonismo",
          },
        ],
      },
    },
    en: {
      hero: {
        title: "Resources and Downloads",
        subtitle: "Educational materials, guides, and tools for families and educators",
      },
      quickLinks: {
        title: "Main Resources",
        subtitle: "Useful links and tools for families and educators",
      },
      links: {
        title: "Useful Links",
        items: [
          {
            title: "ColorADD",
            description: "Universal color identification system for color blind people",
            url: "https://www.coloradd.net/",
          },
          {
            title: "Enchroma - Color Blindness Test",
            description: "Free online test and information about color blindness types",
            url: "https://enchroma.com/pages/color-blindness-test",
          },
          {
            title: "Coblis - Color Blindness Simulator",
            description: "Tool to see how color blind people perceive colors",
            url: "https://www.color-blindness.com/coblis-color-blindness-simulator/",
          },
          {
            title: "Colour Blind Awareness",
            description: "British organization with educational and awareness resources",
            url: "https://www.colourblindawareness.org/",
          },
          {
            title: "National Eye Institute (NEI)",
            description: "Reliable medical information about color blindness from U.S. government",
            url: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness",
          },
          {
            title: "American Academy of Ophthalmology",
            description: "Professional resources and information about color vision deficiency",
            url: "https://www.aao.org/eye-health/diseases/what-is-color-blindness",
          },
        ],
      },
      apps: {
        title: "Recommended Mobile Apps",
        items: [
          {
            name: "Color Blind Pal",
            description: "Identifies colors using phone camera",
          },
          {
            name: "ColorVisor",
            description: "Visual assistant with customizable filters",
          },
          {
            name: "Chromatic Vision Simulator",
            description: "Simulates how a color blind person sees",
          },
        ],
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title={t.hero.title} 
        subtitle={t.hero.subtitle}
        icon={<BookOpen className="h-16 w-16 md:h-20 md:w-20" />}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Quick Access Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{t.quickLinks.title}</h2>
            <p className="text-muted-foreground text-lg">{t.quickLinks.subtitle}</p>
          </div>

          {/* Main Resource Links */}
          <div className="space-y-4">
            {t.links.items.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-6 border-2 border-primary/20 rounded-lg hover:border-primary hover:shadow-lg transition-smooth bg-card"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 text-primary">{link.title}</h3>
                    <p className="text-muted-foreground">{link.description}</p>
                  </div>
                  <ExternalLink className="h-6 w-6 text-primary flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Apps */}
          <SectionCard
            title={t.apps.title}
            icon={<BookOpen className="h-10 w-10 text-secondary" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.apps.items.map((app, index) => (
                <div key={index} className="p-6 bg-gradient-card border-2 border-primary/10 rounded-lg text-center hover:border-primary/30 transition-smooth">
                  <div className="text-5xl mb-4">📱</div>
                  <h4 className="font-bold text-lg mb-2">{app.name}</h4>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default Recursos;
