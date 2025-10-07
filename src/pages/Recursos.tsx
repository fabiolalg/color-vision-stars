import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import { BookOpen, Download, ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      downloads: {
        title: "Guías Descargables",
        items: [
          {
            title: "Guía Completa para Padres (PDF)",
            description: "Todo lo que necesitas saber sobre el daltonismo infantil",
          },
          {
            title: "Manual de Adaptaciones Escolares (PDF)",
            description: "Estrategias específicas para maestros y escuelas",
          },
          {
            title: "Libro de Actividades para Niños (PDF)",
            description: "Actividades divertidas adaptadas para niños con daltonismo",
          },
          {
            title: "Etiquetas ColorADD Imprimibles",
            description: "Etiquetas listas para imprimir y usar en casa o en clase",
          },
        ],
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
      materials: {
        title: "Materiales para Educadores",
        items: [
          "Plantillas de adaptación de exámenes",
          "Pósters educativos para el aula",
          "Presentaciones para capacitación docente",
          "Lista de verificación de accesibilidad",
        ],
      },
    },
    en: {
      hero: {
        title: "Resources and Downloads",
        subtitle: "Educational materials, guides, and tools for families and educators",
      },
      downloads: {
        title: "Downloadable Guides",
        items: [
          {
            title: "Complete Parents' Guide (PDF)",
            description: "Everything you need to know about childhood color blindness",
          },
          {
            title: "School Adaptations Manual (PDF)",
            description: "Specific strategies for teachers and schools",
          },
          {
            title: "Children's Activity Book (PDF)",
            description: "Fun activities adapted for children with color blindness",
          },
          {
            title: "Printable ColorADD Labels",
            description: "Ready-to-print labels for home or classroom use",
          },
        ],
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
      materials: {
        title: "Materials for Educators",
        items: [
          "Test adaptation templates",
          "Educational classroom posters",
          "Teacher training presentations",
          "Accessibility checklist",
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
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Downloadable Guides */}
          <SectionCard
            title={t.downloads.title}
            icon={<Download className="h-10 w-10 text-primary" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.downloads.items.map((item, index) => (
                <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-smooth">
                  <FileText className="h-8 w-8 text-secondary mb-3" />
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                  <Button variant="outline" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    {language === 'es' ? 'Descargar' : 'Download'}
                  </Button>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Useful Links */}
          <SectionCard
            title={t.links.title}
            icon={<ExternalLink className="h-10 w-10 text-primary" />}
          >
            <div className="space-y-4">
              {t.links.items.map((link, index) => (
                <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-smooth">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2">{link.title}</h4>
                      <p className="text-muted-foreground text-sm">{link.description}</p>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Mobile Apps */}
          <SectionCard
            title={t.apps.title}
            icon={<BookOpen className="h-10 w-10 text-secondary" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.apps.items.map((app, index) => (
                <div key={index} className="p-6 bg-gradient-card border rounded-lg text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">📱</span>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{app.name}</h4>
                  <p className="text-muted-foreground text-sm">{app.description}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Materials for Educators */}
          <SectionCard
            title={t.materials.title}
            icon={<FileText className="h-10 w-10 text-primary" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.materials.items.map((material, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-primary-light/20 rounded-lg">
                  <Download className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{material}</span>
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
