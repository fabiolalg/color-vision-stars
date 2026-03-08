import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import ColorBlindnessTest from "@/components/ColorBlindnessTest";
import { Heart, Star, Glasses, Smile, Trophy, Sparkles, Eye } from "lucide-react";

interface ParaNinosProps {
  language: 'es' | 'en';
}

const ParaNinos = ({ language }: ParaNinosProps) => {
  const content = {
    es: {
      hero: {
        title: "¡Hola, Campeón!",
        subtitle: "Tienes una forma especial de ver los colores, ¡y eso está genial!",
      },
      special: {
        title: "Tu Visión Especial",
        description: "Muchas personas ven los colores de una manera diferente. Es como cuando algunos niños necesitan lentes para ver mejor, ¡tú simplemente ves los colores de tu propia manera especial!",
        facts: [
          "8 de cada 100 niños tienen daltonismo",
          "Ves igual de bien que los demás niños",
          "Puedes hacer todo lo que hacen tus amigos",
          "Muchas personas famosas tienen daltonismo",
        ],
      },
      famous: {
        title: "¡Gente Increíble como Tú!",
        description: "Estas personas tienen daltonismo y han hecho cosas asombrosas:",
        people: [
          "Futbolistas famosos",
          "Artistas y pintores",
          "Científicos importantes",
          "Actores de cine",
        ],
      },
      tips: {
        title: "Trucos Súper Útiles",
        description: "Estos trucos te harán la vida más fácil:",
        tricks: [
          {
            title: "Etiquetas con Nombres",
            description: "Pon etiquetas con los nombres de los colores en tus lápices y marcadores",
            icon: "📝",
          },
          {
            title: "Pide Ayuda",
            description: "No tengas miedo de preguntar '¿de qué color es esto?' a tus amigos o maestros",
            icon: "🙋",
          },
          {
            title: "Usa Tecnología",
            description: "Hay aplicaciones móviles que te dicen los colores cuando los fotografías",
            icon: "📱",
          },
          {
            title: "Sistema ColorADD",
            description: "Aprende los símbolos ColorADD, ¡son como un lenguaje secreto para colores!",
            icon: "🎨",
          },
        ],
      },
      remember: {
        title: "Recuerda los Colores",
        description: "Memoriza los colores de cosas que ves todos los días:",
        items: [
          "El cielo es azul ☁️",
          "El pasto es verde 🌱",
          "Las naranjas son naranjas 🍊",
          "Los plátanos son amarillos 🍌",
          "La nieve es blanca ❄️",
        ],
      },
      feelings: {
        title: "¿Cómo Te Sientes?",
        description: "Está bien si a veces te sientes:",
        emotions: [
          "Frustrado cuando no puedes identificar un color",
          "Diferente de tus amigos",
          "Preocupado por las tareas escolares",
        ],
        advice: "¡Pero recuerda! El daltonismo NO significa que:",
        positive: [
          "Seas menos inteligente",
          "No puedas hacer las cosas que te gustan",
          "Debas sentirte mal contigo mismo",
        ],
      },
      superhero: {
        title: "¡Eres un Súper Héroe!",
        description: "Tienes poderes especiales que otros no tienen:",
        powers: [
          "Puedes ver mejor en la oscuridad",
          "Eres muy bueno notando formas y patrones",
          "Tienes una perspectiva única del mundo",
          "Eres excelente para encontrar objetos camuflados",
        ],
      },
    },
    en: {
      hero: {
        title: "Hello, Champion!",
        subtitle: "You have a special way of seeing colors, and that's awesome!",
      },
      special: {
        title: "Your Special Vision",
        description: "Many people see colors in a different way. It's like when some kids need glasses to see better, you just see colors in your own special way!",
        facts: [
          "8 out of 100 boys have color blindness",
          "You see just as well as other kids",
          "You can do everything your friends do",
          "Many famous people have color blindness",
        ],
      },
      famous: {
        title: "Amazing People Like You!",
        description: "These people have color blindness and have done incredible things:",
        people: [
          "Famous soccer players",
          "Artists and painters",
          "Important scientists",
          "Movie actors",
        ],
      },
      tips: {
        title: "Super Useful Tricks",
        description: "These tricks will make your life easier:",
        tricks: [
          {
            title: "Name Labels",
            description: "Put labels with color names on your pencils and markers",
            icon: "📝",
          },
          {
            title: "Ask for Help",
            description: "Don't be afraid to ask 'what color is this?' to your friends or teachers",
            icon: "🙋",
          },
          {
            title: "Use Technology",
            description: "There are mobile apps that tell you colors when you photograph them",
            icon: "📱",
          },
          {
            title: "ColorADD System",
            description: "Learn ColorADD symbols, they're like a secret language for colors!",
            icon: "🎨",
          },
        ],
      },
      remember: {
        title: "Remember the Colors",
        description: "Memorize the colors of things you see every day:",
        items: [
          "The sky is blue ☁️",
          "Grass is green 🌱",
          "Oranges are orange 🍊",
          "Bananas are yellow 🍌",
          "Snow is white ❄️",
        ],
      },
      feelings: {
        title: "How Do You Feel?",
        description: "It's okay if sometimes you feel:",
        emotions: [
          "Frustrated when you can't identify a color",
          "Different from your friends",
          "Worried about school tasks",
        ],
        advice: "But remember! Color blindness does NOT mean that:",
        positive: [
          "You're less intelligent",
          "You can't do the things you like",
          "You should feel bad about yourself",
        ],
      },
      superhero: {
        title: "You're a Super Hero!",
        description: "You have special powers that others don't have:",
        powers: [
          "You can see better in the dark",
          "You're very good at noticing shapes and patterns",
          "You have a unique perspective of the world",
          "You're excellent at finding camouflaged objects",
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
        icon={<Heart className="h-16 w-16 md:h-20 md:w-20 text-secondary fill-secondary animate-pulse" />}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Special Vision */}
          <SectionCard
            title={t.special.title}
            icon={<Glasses className="h-10 w-10 text-primary" />}
          >
            <p className="text-lg mb-6">{t.special.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.special.facts.map((fact, index) => (
                <div key={index} className="p-4 bg-secondary-light rounded-lg text-center">
                  <p className="font-semibold text-lg">{fact}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Interactive Color Test */}
          <ColorBlindnessTest language={language} />

          {/* Famous People */}
          <SectionCard
            title={t.famous.title}
            icon={<Star className="h-10 w-10 text-secondary fill-secondary" />}
          >
            <p className="text-lg mb-6">{t.famous.description}</p>
            <div className="grid grid-cols-2 gap-4">
              {t.famous.people.map((person, index) => (
                <div key={index} className="p-4 bg-primary-light/30 rounded-lg text-center">
                  <Trophy className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="font-medium">{person}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Useful Tips */}
          <SectionCard
            title={t.tips.title}
            icon={<Sparkles className="h-10 w-10 text-primary" />}
          >
            <p className="text-lg mb-6">{t.tips.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.tips.tricks.map((trick, index) => (
                <div key={index} className="p-6 bg-gradient-card border-2 border-primary/20 rounded-lg">
                  <div className="text-4xl mb-3">{trick.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{trick.title}</h4>
                  <p className="text-muted-foreground">{trick.description}</p>
                </div>
              ))}
            </div>
          </SectionCard>

          {/* Remember Colors */}
          <SectionCard
            title={t.remember.title}
            icon={<Smile className="h-10 w-10 text-secondary" />}
          >
            <p className="text-lg mb-6">{t.remember.description}</p>
            <ul className="space-y-3">
              {t.remember.items.map((item, index) => (
                <li key={index} className="text-xl p-3 bg-muted/50 rounded-lg">
                  {item}
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Feelings */}
          <SectionCard
            title={t.feelings.title}
            icon={<Heart className="h-10 w-10 text-primary" />}
          >
            <p className="text-lg mb-4">{t.feelings.description}</p>
            <ul className="space-y-2 mb-6">
              {t.feelings.emotions.map((emotion, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{emotion}</span>
                </li>
              ))}
            </ul>
            <p className="font-bold text-lg mb-4 text-secondary">{t.feelings.advice}</p>
            <ul className="space-y-2">
              {t.feelings.positive.map((item, index) => (
                <li key={index} className="flex items-start gap-2 p-3 bg-secondary-light rounded-lg">
                  <span className="text-secondary font-bold text-xl">✓</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {/* Superhero */}
          <SectionCard
            title={t.superhero.title}
            icon={<Trophy className="h-10 w-10 text-secondary fill-secondary" />}
          >
            <div className="p-6 bg-gradient-accent rounded-lg">
              <p className="text-xl mb-6 font-semibold text-foreground">{t.superhero.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.superhero.powers.map((power, index) => (
                  <div key={index} className="p-4 bg-background/90 border border-primary/20 rounded-lg">
                    <p className="font-semibold flex items-start gap-2 text-foreground">
                      <Sparkles className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      {power}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>
        </div>
      </div>
    </div>
  );
};

export default ParaNinos;
