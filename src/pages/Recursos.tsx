import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import { BookOpen, ExternalLink, Palette, Info, Star, Globe } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

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
            note: "Test orientativo, no diagnóstico clínico",
            url: "https://enchroma.com/pages/color-blindness-test",
          },
          {
            title: "Coblis - Simulador de Daltonismo",
            description: "Herramienta para ver cómo perciben los colores las personas con daltonismo",
            url: "https://www.color-blindness.com/coblis-color-blindness-simulator/",
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
            appStore: "https://apps.apple.com/app/color-blind-pal/id1037744228",
            playStore: "https://play.google.com/store/apps/details?id=com.colorblindpal.app",
          },
          {
            name: "ColorVisor",
            description: "Asistente visual con filtros personalizables",
            appStore: "https://apps.apple.com/app/colorvisor/id6476592702",
            playStore: null,
          },
          {
            name: "Chromatic Vision Simulator",
            description: "Simula cómo ve una persona con daltonismo",
            appStore: "https://apps.apple.com/app/chromatic-vision-simulator/id389310222",
            playStore: "https://play.google.com/store/apps/details?id=asada0.android.cvsimulator",
          },
        ],
      },
      colorADD: {
        intro: {
          title: "¿Qué es ColorADD?",
          description: "ColorADD es un sistema de identificación de colores basado en símbolos gráficos que permite a las personas con daltonismo identificar colores de manera independiente. Fue creado en Portugal y se está implementando en todo el mundo.",
        },
        basics: {
          title: "Colores Primarios Básicos",
          description: "El sistema se basa en tres símbolos básicos para los colores primarios:",
          colors: [
            { name: "Amarillo", symbol: "▲", description: "Triángulo" },
            { name: "Rojo", symbol: "■", description: "Cuadrado" },
            { name: "Azul", symbol: "●", description: "Círculo" },
          ],
        },
        secondary: {
          title: "Colores Secundarios",
          description: "Los colores secundarios se forman combinando los símbolos primarios:",
          combinations: [
            "Verde = Amarillo (▲) + Azul (●)",
            "Naranja = Amarillo (▲) + Rojo (■)",
            "Morado = Rojo (■) + Azul (●)",
          ],
        },
        special: {
          title: "Casos Especiales",
          colors: [
            { name: "Blanco", description: "Símbolo vacío o sin relleno" },
            { name: "Negro", description: "Símbolo completamente relleno" },
            { name: "Gris", description: "Punto central" },
          ],
        },
        applications: {
          title: "¿Dónde se Usa ColorADD?",
          description: "El sistema ColorADD se está implementando en:",
          areas: [
            "Transporte público (metro, autobuses)",
            "Hospitales y farmacias",
            "Escuelas y universidades",
            "Productos de consumo",
            "Señalización urbana",
            "Industria textil (etiquetas de ropa)",
          ],
        },
        benefits: {
          title: "Beneficios del Sistema",
          items: [
            "Universal y fácil de aprender",
            "No requiere tecnología",
            "Funciona para todos los tipos de daltonismo",
            "Promueve la inclusión y autonomía",
            "Reconocido internacionalmente",
          ],
        },
        learn: {
          title: "¿Cómo Aprender ColorADD?",
          steps: [
            "Memoriza los tres símbolos básicos (triángulo, cuadrado, círculo)",
            "Practica identificar combinaciones de símbolos",
            "Usa etiquetas ColorADD en objetos de uso diario",
            "Descarga la app oficial ColorADD",
            "Comparte el sistema con familia y amigos",
          ],
        },
      }
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
            note: "Guidance test, not a clinical diagnosis",
            url: "https://enchroma.com/pages/color-blindness-test",
          },
          {
            title: "Coblis - Color Blindness Simulator",
            description: "Tool to see how color blind people perceive colors",
            url: "https://www.color-blindness.com/coblis-color-blindness-simulator/",
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
            appStore: "https://apps.apple.com/app/color-blind-pal/id1037744228",
            playStore: "https://play.google.com/store/apps/details?id=com.colorblindpal.app",
          },
          {
            name: "ColorVisor",
            description: "Visual assistant with customizable filters",
            appStore: "https://apps.apple.com/app/colorvisor/id6476592702",
            playStore: null,
          },
          {
            name: "Chromatic Vision Simulator",
            description: "Simulates how a color blind person sees",
            appStore: "https://apps.apple.com/app/chromatic-vision-simulator/id389310222",
            playStore: "https://play.google.com/store/apps/details?id=asada0.android.cvsimulator",
          },
        ],
      },
      colorADD: {
        intro: {
          title: "What is ColorADD?",
          description: "ColorADD is a color identification system based on graphic symbols that allows people with color blindness to identify colors independently. It was created in Portugal and is being implemented worldwide.",
        },
        basics: {
          title: "Basic Primary Colors",
          description: "The system is based on three basic symbols for primary colors:",
          colors: [
            { name: "Yellow", symbol: "▲", description: "Triangle" },
            { name: "Red", symbol: "■", description: "Square" },
            { name: "Blue", symbol: "●", description: "Circle" },
          ],
        },
        secondary: {
          title: "Secondary Colors",
          description: "Secondary colors are formed by combining primary symbols:",
          combinations: [
            "Green = Yellow (▲) + Blue (●)",
            "Orange = Yellow (▲) + Red (■)",
            "Purple = Red (■) + Blue (●)",
          ],
        },
        special: {
          title: "Special Cases",
          colors: [
            { name: "White", description: "Empty or unfilled symbol" },
            { name: "Black", description: "Completely filled symbol" },
            { name: "Gray", description: "Center point" },
          ],
        },
        applications: {
          title: "Where is ColorADD Used?",
          description: "The ColorADD system is being implemented in:",
          areas: [
            "Public transportation (metro, buses)",
            "Hospitals and pharmacies",
            "Schools and universities",
            "Consumer products",
            "Urban signage",
            "Textile industry (clothing labels)",
          ],
        },
        benefits: {
          title: "System Benefits",
          items: [
            "Universal and easy to learn",
            "Doesn't require technology",
            "Works for all types of color blindness",
            "Promotes inclusion and autonomy",
            "Internationally recognized",
          ],
        },
        learn: {
          title: "How to Learn ColorADD?",
          steps: [
            "Memorize the three basic symbols (triangle, square, circle)",
            "Practice identifying symbol combinations",
            "Use ColorADD labels on everyday objects",
            "Download the official ColorADD app",
            "Share the system with family and friends",
          ],
        },
      }
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
                    {'note' in link && link.note && (
                      <p className="text-sm italic text-muted-foreground/70 mt-1">{link.note}</p>
                    )}
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
                  <p className="text-muted-foreground text-sm mb-4">{app.description}</p>
                  <div className="flex justify-center gap-3">
                    {app.appStore && (
                      <a href={app.appStore} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-smooth font-medium">
                        🍎 App Store
                      </a>
                    )}
                    {app.playStore && (
                      <a href={app.playStore} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-smooth font-medium">
                        🤖 Google Play
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* ColorADD Accordion System */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="coloradd" className="border-2 border-primary/20 rounded-xl px-6 bg-card data-[state=open]:border-primary transition-all shadow-sm">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 rounded-xl bg-accent">
                    <Palette className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{language === 'es' ? 'Sistema ColorADD' : 'ColorADD System'}</h3>
                    <p className="text-muted-foreground font-normal mt-1">
                      {language === 'es' 
                        ? 'Código universal de identificación de colores para personas con daltonismo' 
                        : 'Universal color identification code for people with color blindness'}
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8 space-y-8">
                {/* Introduction */}
                <SectionCard
                  title={t.colorADD.intro.title}
                  icon={<Info className="h-8 w-8 text-primary" />}
                  className="shadow-none border-primary/10"
                >
                  <p className="text-lg leading-relaxed">{t.colorADD.intro.description}</p>
                </SectionCard>

                {/* Basic Colors */}
                <SectionCard
                  title={t.colorADD.basics.title}
                  icon={<Palette className="h-8 w-8 text-secondary" />}
                  className="shadow-none border-primary/10"
                >
                  <p className="text-muted-foreground mb-6">{t.colorADD.basics.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {t.colorADD.basics.colors.map((color, index) => (
                      <div key={index} className="text-center p-8 bg-gradient-card border-2 border-primary/20 rounded-lg">
                        <div className="text-7xl mb-4">{color.symbol}</div>
                        <h4 className="font-bold text-xl mb-2">{color.name}</h4>
                        <p className="text-muted-foreground">{color.description}</p>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                {/* Secondary Colors */}
                <SectionCard
                  title={t.colorADD.secondary.title}
                  icon={<Star className="h-8 w-8 text-primary" />}
                  className="shadow-none border-primary/10"
                >
                  <p className="text-muted-foreground mb-6">{t.colorADD.secondary.description}</p>
                  <div className="space-y-3">
                    {t.colorADD.secondary.combinations.map((combo, index) => (
                      <div key={index} className="p-4 bg-secondary-light rounded-lg text-center text-lg font-medium">
                        {combo}
                      </div>
                    ))}
                  </div>
                </SectionCard>

                {/* Special Cases */}
                <SectionCard
                  title={t.colorADD.special.title}
                  icon={<Info className="h-8 w-8 text-secondary" />}
                  className="shadow-none border-primary/10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {t.colorADD.special.colors.map((color, index) => (
                      <div key={index} className="p-6 bg-muted/50 rounded-lg text-center">
                        <h4 className="font-bold text-lg mb-2">{color.name}</h4>
                        <p className="text-muted-foreground text-sm">{color.description}</p>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                {/* Applications */}
                <SectionCard
                  title={t.colorADD.applications.title}
                  icon={<Globe className="h-8 w-8 text-primary" />}
                  className="shadow-none border-primary/10"
                >
                  <p className="text-muted-foreground mb-6">{t.colorADD.applications.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {t.colorADD.applications.areas.map((area, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-primary-light/20 rounded-lg">
                        <span className="text-primary font-bold text-xl">✓</span>
                        <span className="font-medium">{area}</span>
                      </div>
                    ))}
                  </div>
                </SectionCard>

                {/* Benefits */}
                <SectionCard
                  title={t.colorADD.benefits.title}
                  icon={<Star className="h-8 w-8 text-secondary" />}
                  className="shadow-none border-primary/10"
                >
                  <ul className="space-y-3">
                    {t.colorADD.benefits.items.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 p-4 bg-secondary-light rounded-lg">
                        <Star className="h-6 w-6 flex-shrink-0 text-secondary fill-secondary" />
                        <span className="font-medium text-lg text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </SectionCard>

                {/* How to Learn */}
                <SectionCard
                  title={t.colorADD.learn.title}
                  icon={<Palette className="h-8 w-8 text-primary" />}
                  className="shadow-none border-primary/10"
                >
                  <ol className="space-y-4">
                    {t.colorADD.learn.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0 text-lg">
                          {index + 1}
                        </span>
                        <span className="pt-2 text-lg">{step}</span>
                      </li>
                    ))}
                  </ol>
                </SectionCard>

              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </div>
      </div>
    </div>
  );
};

export default Recursos;
