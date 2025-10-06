import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import { Users, Eye, Heart, Home, TestTube, AlertCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ParaPadresProps {
  language: 'es' | 'en';
}

const ParaPadres = ({ language }: ParaPadresProps) => {
  const content = {
    es: {
      hero: {
        title: "Guía para Padres",
        subtitle: "Todo lo que necesitas saber para apoyar a tu hijo con daltonismo",
      },
      whatIs: {
        title: "¿Qué es el Daltonismo?",
        description: "El daltonismo es una condición genética que afecta la percepción de los colores. Es importante entender que:",
        points: [
          "No es una enfermedad, es una característica visual",
          "No afecta la agudeza visual ni la inteligencia",
          "Es más común en niños que en niñas (8% vs 0.5%)",
          "Se hereda de padres a hijos a través del cromosoma X",
        ],
      },
      types: {
        title: "Tipos de Daltonismo",
        items: [
          {
            name: "Deuteranomalía (Rojo-Verde)",
            description: "El tipo más común. Dificultad para distinguir rojos y verdes.",
          },
          {
            name: "Protanomalía (Rojo-Verde)",
            description: "Similar al anterior, pero con mayor dificultad con el rojo.",
          },
          {
            name: "Tritanomalía (Azul-Amarillo)",
            description: "Menos común. Dificultad para distinguir azules y amarillos.",
          },
          {
            name: "Acromatopsia (Total)",
            description: "Muy raro. No se perciben colores, solo tonos de gris.",
          },
        ],
      },
      signs: {
        title: "Señales de Detección Temprana",
        description: "Observa estos comportamientos en tu hijo (especialmente alrededor de los 3 años):",
        items: [
          "Confunde colores básicos repetidamente (rojo/verde, azul/amarillo)",
          "Usa colores inusuales al dibujar (cielo verde, pasto marrón)",
          "Tiene dificultad con actividades de clasificación por colores",
          "Muestra frustración en tareas visuales que otros niños hacen fácilmente",
          "Identifica objetos por forma o brillo en lugar de color",
        ],
      },
      diagnosis: {
        title: "Diagnóstico Profesional",
        description: "Si sospechas que tu hijo tiene daltonismo:",
        steps: [
          "Programa una cita con un oftalmólogo u optometrista pediátrico",
          "El test de Ishihara es la prueba más común (usa números formados por círculos de colores)",
          "Para niños pequeños, existen tests adaptados con formas y animales",
          "El diagnóstico temprano permite implementar apoyos desde el inicio escolar",
        ],
      },
      support: {
        title: "Apoyo Emocional",
        description: "Mantener la autoestima de tu hijo es fundamental:",
        tips: [
          "Explícale que muchas personas tienen daltonismo y llevan vidas normales y exitosas",
          "Enfatiza sus fortalezas y habilidades únicas",
          "Nunca uses el daltonismo como excusa o limitación",
          "Conecta con otros niños con daltonismo si es posible",
          "Mantén una comunicación abierta sobre cómo se siente",
        ],
      },
      home: {
        title: "Adaptaciones en Casa",
        description: "Pequeños cambios que hacen una gran diferencia:",
        adaptations: [
          "Etiqueta los lápices de colores con sus nombres escritos",
          "Organiza la ropa con etiquetas o símbolos",
          "Enseña los 'colores correctos' de objetos comunes (césped verde, cielo azul)",
          "Usa el sistema ColorADD para identificar colores",
          "Implementa rutinas que no dependan del color",
        ],
      },
    },
    en: {
      hero: {
        title: "Parents' Guide",
        subtitle: "Everything you need to know to support your color blind child",
      },
      whatIs: {
        title: "What is Color Blindness?",
        description: "Color blindness is a genetic condition that affects color perception. It's important to understand that:",
        points: [
          "It's not a disease, it's a visual characteristic",
          "It doesn't affect visual acuity or intelligence",
          "It's more common in boys than girls (8% vs 0.5%)",
          "It's inherited from parents through the X chromosome",
        ],
      },
      types: {
        title: "Types of Color Blindness",
        items: [
          {
            name: "Deuteranomaly (Red-Green)",
            description: "The most common type. Difficulty distinguishing reds and greens.",
          },
          {
            name: "Protanomaly (Red-Green)",
            description: "Similar to the previous one, but with greater difficulty with red.",
          },
          {
            name: "Tritanomaly (Blue-Yellow)",
            description: "Less common. Difficulty distinguishing blues and yellows.",
          },
          {
            name: "Achromatopsia (Complete)",
            description: "Very rare. No color perception, only shades of gray.",
          },
        ],
      },
      signs: {
        title: "Early Detection Signs",
        description: "Watch for these behaviors in your child (especially around age 3):",
        items: [
          "Repeatedly confuses basic colors (red/green, blue/yellow)",
          "Uses unusual colors when drawing (green sky, brown grass)",
          "Has difficulty with color-sorting activities",
          "Shows frustration in visual tasks other children do easily",
          "Identifies objects by shape or brightness instead of color",
        ],
      },
      diagnosis: {
        title: "Professional Diagnosis",
        description: "If you suspect your child has color blindness:",
        steps: [
          "Schedule an appointment with a pediatric ophthalmologist or optometrist",
          "The Ishihara test is the most common (uses numbers formed by colored circles)",
          "For young children, adapted tests with shapes and animals are available",
          "Early diagnosis allows support implementation from the start of school",
        ],
      },
      support: {
        title: "Emotional Support",
        description: "Maintaining your child's self-esteem is essential:",
        tips: [
          "Explain that many people have color blindness and lead normal, successful lives",
          "Emphasize their unique strengths and abilities",
          "Never use color blindness as an excuse or limitation",
          "Connect with other color blind children if possible",
          "Maintain open communication about how they feel",
        ],
      },
      home: {
        title: "Home Adaptations",
        description: "Small changes that make a big difference:",
        adaptations: [
          "Label colored pencils with written names",
          "Organize clothes with labels or symbols",
          "Teach the 'correct colors' of common objects (green grass, blue sky)",
          "Use the ColorADD system to identify colors",
          "Implement routines that don't depend on color",
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
        icon={<Users className="h-16 w-16 md:h-20 md:w-20" />}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* What is Color Blindness */}
          <SectionCard
            title={t.whatIs.title}
            icon={<Eye className="h-10 w-10 text-primary" />}
          >
            <p className="text-muted-foreground mb-4">{t.whatIs.description}</p>
            <ul className="space-y-2">
              {t.whatIs.points.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Types */}
          <SectionCard
            title={t.types.title}
            icon={<AlertCircle className="h-10 w-10 text-primary" />}
          >
            <Accordion type="single" collapsible className="w-full">
              {t.types.items.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="font-semibold">{item.name}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SectionCard>

          {/* Early Detection Signs */}
          <SectionCard
            title={t.signs.title}
            icon={<Eye className="h-10 w-10 text-secondary" />}
          >
            <p className="text-muted-foreground mb-4">{t.signs.description}</p>
            <ul className="space-y-3">
              {t.signs.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <span className="text-secondary font-bold text-lg">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Diagnosis */}
          <SectionCard
            title={t.diagnosis.title}
            icon={<TestTube className="h-10 w-10 text-primary" />}
          >
            <p className="text-muted-foreground mb-4">{t.diagnosis.description}</p>
            <ol className="space-y-3">
              {t.diagnosis.steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </SectionCard>

          {/* Emotional Support */}
          <SectionCard
            title={t.support.title}
            icon={<Heart className="h-10 w-10 text-secondary" />}
          >
            <p className="text-muted-foreground mb-4">{t.support.description}</p>
            <ul className="space-y-2">
              {t.support.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Heart className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Home Adaptations */}
          <SectionCard
            title={t.home.title}
            icon={<Home className="h-10 w-10 text-primary" />}
          >
            <p className="text-muted-foreground mb-4">{t.home.description}</p>
            <ul className="space-y-3">
              {t.home.adaptations.map((adaptation, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-primary-light/20 rounded-lg">
                  <span className="text-primary font-bold text-lg">→</span>
                  <span>{adaptation}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default ParaPadres;
