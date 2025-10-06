import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import { Palette, Info, Star, Globe } from "lucide-react";

interface ColorADDProps {
  language: 'es' | 'en';
}

const ColorADD = ({ language }: ColorADDProps) => {
  const content = {
    es: {
      hero: {
        title: "Sistema ColorADD",
        subtitle: "Código universal de identificación de colores para personas con daltonismo",
      },
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
    },
    en: {
      hero: {
        title: "ColorADD System",
        subtitle: "Universal color identification code for people with color blindness",
      },
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
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title={t.hero.title} 
        subtitle={t.hero.subtitle}
        icon={<Palette className="h-16 w-16 md:h-20 md:w-20" />}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <SectionCard
            title={t.intro.title}
            icon={<Info className="h-10 w-10 text-primary" />}
          >
            <p className="text-lg leading-relaxed">{t.intro.description}</p>
          </SectionCard>

          {/* Basic Colors */}
          <SectionCard
            title={t.basics.title}
            icon={<Palette className="h-10 w-10 text-secondary" />}
          >
            <p className="text-muted-foreground mb-6">{t.basics.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.basics.colors.map((color, index) => (
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
            title={t.secondary.title}
            icon={<Star className="h-10 w-10 text-primary" />}
          >
            <p className="text-muted-foreground mb-6">{t.secondary.description}</p>
            <div className="space-y-3">
              {t.secondary.combinations.map((combo, index) => (
                <div key={index} className="p-4 bg-secondary-light rounded-lg text-center text-lg font-medium">
                  {combo}
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Special Cases */}
          <SectionCard
            title={t.special.title}
            icon={<Info className="h-10 w-10 text-secondary" />}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.special.colors.map((color, index) => (
                <div key={index} className="p-6 bg-muted/50 rounded-lg text-center">
                  <h4 className="font-bold text-lg mb-2">{color.name}</h4>
                  <p className="text-muted-foreground text-sm">{color.description}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Applications */}
          <SectionCard
            title={t.applications.title}
            icon={<Globe className="h-10 w-10 text-primary" />}
          >
            <p className="text-muted-foreground mb-6">{t.applications.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.applications.areas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-primary-light/20 rounded-lg">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Benefits */}
          <SectionCard
            title={t.benefits.title}
            icon={<Star className="h-10 w-10 text-secondary" />}
          >
            <ul className="space-y-3">
              {t.benefits.items.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 p-4 bg-gradient-accent text-secondary-foreground rounded-lg">
                  <Star className="h-6 w-6 flex-shrink-0 fill-secondary-foreground" />
                  <span className="font-medium text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* How to Learn */}
          <SectionCard
            title={t.learn.title}
            icon={<Palette className="h-10 w-10 text-primary" />}
          >
            <ol className="space-y-4">
              {t.learn.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0 text-lg">
                    {index + 1}
                  </span>
                  <span className="pt-2 text-lg">{step}</span>
                </li>
              ))}
            </ol>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default ColorADD;
