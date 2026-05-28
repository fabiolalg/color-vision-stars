import HeroSection from "@/components/HeroSection";
import NextSection from "@/components/NextSection";
import SEO from "@/components/SEO";
import SectionCard from "@/components/SectionCard";
import { School, BookOpen, Users, ClipboardList, Lightbulb } from "lucide-react";

interface ParaEscuelasProps {
  language: 'es' | 'en';
}

const ParaEscuelas = ({ language }: ParaEscuelasProps) => {
  const content = {
    es: {
      hero: {
        title: "Guía para Escuelas",
        subtitle: "Estrategias y recursos para crear aulas inclusivas para estudiantes con daltonismo",
      },
      intro: "Los estudiantes con daltonismo tienen la misma capacidad de aprendizaje que sus compañeros. Con adaptaciones simples, podemos asegurar que ningún estudiante quede en desventaja.",
      materials: {
        title: "Adaptación de Materiales Educativos",
        description: "Modificaciones esenciales en los recursos de enseñanza:",
        items: [
          "Usar líneas gruesas y patrones en mapas en lugar de solo colores",
          "Agregar etiquetas de texto a códigos de colores (gráficas, diagramas)",
          "Maximizar el contraste en materiales visuales",
          "Evitar combinaciones problemáticas: rojo/verde, azul/morado, marrón/verde",
          "Proporcionar alternativas a la codificación por colores en libros de texto",
        ],
      },
      strategies: {
        title: "Estrategias de Enseñanza Inclusiva",
        description: "Técnicas efectivas para el aula:",
        techniques: [
          {
            title: "Pizarras y Presentaciones",
            points: [
              "Usar marcadores de alto contraste (negro, azul oscuro)",
              "Subrayar información importante en lugar de colorearla",
              "Nombrar los colores al usarlos ('este círculo rojo aquí')",
            ],
          },
          {
            title: "Sistemas de Evaluación",
            points: [
              "Evitar sistemas de semáforo (rojo/amarillo/verde)",
              "Usar números, letras o símbolos para calificaciones",
              "No usar solo color para indicar correcto/incorrecto",
            ],
          },
          {
            title: "Actividades Prácticas",
            points: [
              "Etiquetar materiales de arte con nombres de colores",
              "Adaptar juegos educativos con símbolos adicionales",
              "Permitir que el estudiante trabaje con un compañero en tareas de color",
            ],
          },
        ],
      },
      technology: {
        title: "Recursos Tecnológicos",
        description: "Herramientas que pueden ayudar:",
        tools: [
          "Aplicaciones móviles de identificación de colores",
          "Filtros de daltonismo en proyectores/pantallas",
          "Software educativo con opciones de accesibilidad",
          "Sistema ColorADD para identificación universal de colores",
        ],
      },
      communication: {
        title: "Comunicación con Familias",
        description: "Colaboración efectiva escuela-hogar:",
        steps: [
          "Documentar el diagnóstico en el expediente del estudiante",
          "Desarrollar un plan de apoyo educativo individualizado",
          "Comunicar las adaptaciones implementadas regularmente",
          "Capacitar a todos los docentes que trabajen con el estudiante",
          "Mantener reuniones periódicas para evaluar el progreso",
        ],
      },
      training: {
        title: "Formación Docente",
        description: "Temas clave para capacitación del personal:",
        topics: [
          "Conceptos básicos sobre daltonismo y sus tipos",
          "Identificación de estudiantes que pueden necesitar evaluación",
          "Estrategias de adaptación específicas por materia",
          "Uso del sistema ColorADD",
          "Creación de materiales accesibles",
          "Sensibilización sobre el impacto emocional",
        ],
      },
    },
    en: {
      hero: {
        title: "Guide for Schools",
        subtitle: "Strategies and resources to create inclusive classrooms for color blind students",
      },
      intro: "Students with color blindness have the same learning capacity as their peers. With simple adaptations, we can ensure no student is at a disadvantage.",
      materials: {
        title: "Adapting Educational Materials",
        description: "Essential modifications in teaching resources:",
        items: [
          "Use thick lines and patterns on maps instead of only colors",
          "Add text labels to color codes (graphs, diagrams)",
          "Maximize contrast in visual materials",
          "Avoid problematic combinations: red/green, blue/purple, brown/green",
          "Provide alternatives to color coding in textbooks",
        ],
      },
      strategies: {
        title: "Inclusive Teaching Strategies",
        description: "Effective classroom techniques:",
        techniques: [
          {
            title: "Boards and Presentations",
            points: [
              "Use high-contrast markers (black, dark blue)",
              "Underline important information instead of coloring it",
              "Name colors when using them ('this red circle here')",
            ],
          },
          {
            title: "Evaluation Systems",
            points: [
              "Avoid traffic light systems (red/yellow/green)",
              "Use numbers, letters, or symbols for grades",
              "Don't use only color to indicate correct/incorrect",
            ],
          },
          {
            title: "Hands-on Activities",
            points: [
              "Label art materials with color names",
              "Adapt educational games with additional symbols",
              "Allow student to work with a partner on color tasks",
            ],
          },
        ],
      },
      technology: {
        title: "Technology Resources",
        description: "Tools that can help:",
        tools: [
          "Mobile color identification apps",
          "Color blindness filters on projectors/screens",
          "Educational software with accessibility options",
          "ColorADD system for universal color identification",
        ],
      },
      communication: {
        title: "Communication with Families",
        description: "Effective school-home collaboration:",
        steps: [
          "Document the diagnosis in the student's file",
          "Develop an individualized educational support plan",
          "Communicate implemented adaptations regularly",
          "Train all teachers working with the student",
          "Hold periodic meetings to assess progress",
        ],
      },
      training: {
        title: "Teacher Training",
        description: "Key topics for staff training:",
        topics: [
          "Basic concepts about color blindness and its types",
          "Identifying students who may need evaluation",
          "Subject-specific adaptation strategies",
          "Use of the ColorADD system",
          "Creating accessible materials",
          "Awareness of emotional impact",
        ],
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <SEO
        title={language === 'es' ? 'Para Escuelas — Aulas Inclusivas y Daltonismo' : 'For Schools — Inclusive Classrooms & Color Blindness'}
        description={language === 'es' ? 'Estrategias de enseñanza inclusiva, adaptación de materiales y recursos para estudiantes con daltonismo.' : 'Inclusive teaching strategies, material adaptations and resources for students with color blindness.'}
        path="/para-escuelas"
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: language === 'es' ? 'Guía para Escuelas sobre Daltonismo' : 'Schools Guide to Color Blindness',
          inLanguage: language,
          author: { "@type": "Organization", name: "Guía Daltonismo Infantil" },
        }}
      />
      <HeroSection 
        title={t.hero.title} 
        subtitle={t.hero.subtitle}
        icon={<School className="h-16 w-16 md:h-20 md:w-20" />}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-center text-muted-foreground mb-12 p-6 bg-primary-light/20 rounded-lg border-l-4 border-primary">
            {t.intro}
          </p>

          <div className="space-y-12">
            {/* Educational Materials */}
            <SectionCard
              title={t.materials.title}
              icon={<BookOpen className="h-10 w-10 text-primary" />}
            >
              <p className="text-muted-foreground mb-4">{t.materials.description}</p>
              <ul className="space-y-3">
                {t.materials.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <span className="text-primary font-bold text-lg">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Teaching Strategies */}
            <SectionCard
              title={t.strategies.title}
              icon={<Lightbulb className="h-10 w-10 text-secondary" />}
            >
              <p className="text-muted-foreground mb-6">{t.strategies.description}</p>
              <div className="space-y-6">
                {t.strategies.techniques.map((technique, index) => (
                  <div key={index} className="border-l-4 border-secondary pl-4">
                    <h4 className="font-bold text-lg mb-3">{technique.title}</h4>
                    <ul className="space-y-2">
                      {technique.points.map((point, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-2">
                          <span className="text-secondary font-bold">→</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Technology Resources */}
            <SectionCard
              title={t.technology.title}
              icon={<ClipboardList className="h-10 w-10 text-primary" />}
            >
              <p className="text-muted-foreground mb-4">{t.technology.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.technology.tools.map((tool, index) => (
                  <div key={index} className="p-4 bg-primary-light/20 rounded-lg">
                    <p className="font-medium">{tool}</p>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Communication with Families */}
            <SectionCard
              title={t.communication.title}
              icon={<Users className="h-10 w-10 text-secondary" />}
            >
              <p className="text-muted-foreground mb-4">{t.communication.description}</p>
              <ol className="space-y-3">
                {t.communication.steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </SectionCard>

            {/* Teacher Training */}
            <SectionCard
              title={t.training.title}
              icon={<School className="h-10 w-10 text-primary" />}
            >
              <p className="text-muted-foreground mb-4">{t.training.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.training.topics.map((topic, index) => (
                  <div key={index} className="flex items-start gap-2 p-3 bg-muted/50 rounded-lg">
                    <span className="text-primary font-bold">•</span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </SectionCard>
          </div>
        </div>
      </div>
      <NextSection language={language} currentPath="/para-escuelas" />
    </div>
  );
};

export default ParaEscuelas;
