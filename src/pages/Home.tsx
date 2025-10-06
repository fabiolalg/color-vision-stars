import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import { Users, School, Heart, Eye, BookOpen, Palette } from "lucide-react";

interface HomeProps {
  language: 'es' | 'en';
}

const Home = ({ language }: HomeProps) => {
  const content = {
    es: {
      hero: {
        title: "Guía Completa sobre Daltonismo Infantil",
        subtitle: "Información, recursos y apoyo para padres, escuelas y niños. El daltonismo no es una limitación, es una forma diferente de ver el mundo.",
        cta: "Explorar la Guía",
      },
      stats: {
        title: "¿Sabías que...?",
        boys: "8% de los niños",
        girls: "0.5% de las niñas",
        subtitle: "tienen algún tipo de daltonismo",
      },
      sections: {
        parents: {
          title: "Para Padres",
          description: "Aprende a detectar, entender y apoyar a tu hijo con daltonismo",
          cta: "Guía para Padres",
        },
        schools: {
          title: "Para Escuelas",
          description: "Estrategias de enseñanza inclusiva y adaptaciones educativas",
          cta: "Recursos Educativos",
        },
        children: {
          title: "Para Niños",
          description: "Contenido diseñado especialmente para niños con daltonismo",
          cta: "Zona Infantil",
        },
      },
      features: {
        title: "Recursos Disponibles",
        coloradd: {
          title: "Sistema ColorADD",
          description: "Código universal de identificación de colores",
        },
        tests: {
          title: "Tests Online",
          description: "Pruebas preliminares adaptadas para niños",
        },
        resources: {
          title: "Biblioteca de Recursos",
          description: "Guías descargables y materiales educativos",
        },
      },
    },
    en: {
      hero: {
        title: "Complete Guide to Childhood Color Blindness",
        subtitle: "Information, resources, and support for parents, schools, and children. Color blindness is not a limitation, it's a different way of seeing the world.",
        cta: "Explore the Guide",
      },
      stats: {
        title: "Did you know...?",
        boys: "8% of boys",
        girls: "0.5% of girls",
        subtitle: "have some form of color blindness",
      },
      sections: {
        parents: {
          title: "For Parents",
          description: "Learn to detect, understand, and support your color blind child",
          cta: "Parents' Guide",
        },
        schools: {
          title: "For Schools",
          description: "Inclusive teaching strategies and educational adaptations",
          cta: "Educational Resources",
        },
        children: {
          title: "For Children",
          description: "Content specially designed for children with color blindness",
          cta: "Kids' Zone",
        },
      },
      features: {
        title: "Available Resources",
        coloradd: {
          title: "ColorADD System",
          description: "Universal color identification code",
        },
        tests: {
          title: "Online Tests",
          description: "Child-friendly preliminary assessments",
        },
        resources: {
          title: "Resource Library",
          description: "Downloadable guides and educational materials",
        },
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      <HeroSection 
        title={t.hero.title} 
        subtitle={t.hero.subtitle}
        icon={<Eye className="h-16 w-16 md:h-20 md:w-20" />}
      >
        <Link to="/para-padres">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            {t.hero.cta}
          </Button>
        </Link>
      </HeroSection>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-8">{t.stats.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="text-center p-6 bg-background rounded-lg shadow-elegant">
              <p className="text-4xl font-bold text-primary mb-2">{t.stats.boys}</p>
              <p className="text-muted-foreground">{t.stats.subtitle}</p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-elegant">
              <p className="text-4xl font-bold text-secondary mb-2">{t.stats.girls}</p>
              <p className="text-muted-foreground">{t.stats.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionCard
              title={t.sections.parents.title}
              description={t.sections.parents.description}
              icon={<Users className="h-12 w-12 text-primary" />}
            >
              <Link to="/para-padres">
                <Button className="w-full mt-4">{t.sections.parents.cta}</Button>
              </Link>
            </SectionCard>

            <SectionCard
              title={t.sections.schools.title}
              description={t.sections.schools.description}
              icon={<School className="h-12 w-12 text-primary" />}
            >
              <Link to="/para-escuelas">
                <Button className="w-full mt-4">{t.sections.schools.cta}</Button>
              </Link>
            </SectionCard>

            <SectionCard
              title={t.sections.children.title}
              description={t.sections.children.description}
              icon={<Heart className="h-12 w-12 text-primary" />}
            >
              <Link to="/para-ninos">
                <Button className="w-full mt-4">{t.sections.children.cta}</Button>
              </Link>
            </SectionCard>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-12">{t.features.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <Palette className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t.features.coloradd.title}</h3>
              <p className="text-muted-foreground">{t.features.coloradd.description}</p>
            </div>
            <div className="text-center p-6">
              <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t.features.tests.title}</h3>
              <p className="text-muted-foreground">{t.features.tests.description}</p>
            </div>
            <div className="text-center p-6">
              <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{t.features.resources.title}</h3>
              <p className="text-muted-foreground">{t.features.resources.description}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
