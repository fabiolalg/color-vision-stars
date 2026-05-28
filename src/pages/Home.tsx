import { Link } from "react-router-dom";
import NextSection from "@/components/NextSection";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionCard from "@/components/SectionCard";
import { Users, School, Heart, Eye, BookOpen, Palette, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
        boys: "8%",
        boysLabel: "de los niños",
        girls: "0.5%",
        girlsLabel: "de las niñas",
        subtitle: "tienen algún tipo de daltonismo",
        global: "300M+",
        globalLabel: "personas en el mundo",
      },
      sections: {
        title: "Encuentra lo que necesitas",
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
        title: "Herramientas y Recursos",
        subtitle: "Todo lo que necesitas para entender y apoyar el daltonismo",
        coloradd: {
          title: "Sistema ColorADD",
          description: "Código universal de identificación de colores para facilitar la vida diaria",
        },
        tests: {
          title: "Tests Online",
          description: "Pruebas preliminares adaptadas para niños con resultados inmediatos",
        },
        resources: {
          title: "Biblioteca de Recursos",
          description: "Guías, enlaces y materiales educativos cuidadosamente seleccionados",
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
        boys: "8%",
        boysLabel: "of boys",
        girls: "0.5%",
        girlsLabel: "of girls",
        subtitle: "have some form of color blindness",
        global: "300M+",
        globalLabel: "people worldwide",
      },
      sections: {
        title: "Find what you need",
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
        title: "Tools & Resources",
        subtitle: "Everything you need to understand and support color blindness",
        coloradd: {
          title: "ColorADD System",
          description: "Universal color identification code to make daily life easier",
        },
        tests: {
          title: "Online Tests",
          description: "Child-friendly preliminary assessments with immediate results",
        },
        resources: {
          title: "Resource Library",
          description: "Carefully curated guides, links, and educational materials",
        },
      },
    },
  };

  const t = content[language];

  const sectionIcons = [
    <Users className="h-7 w-7 text-accent-foreground" />,
    <School className="h-7 w-7 text-accent-foreground" />,
    <Heart className="h-7 w-7 text-accent-foreground" />,
  ];

  const sectionData = [
    { ...t.sections.parents, path: "/para-padres", icon: sectionIcons[0] },
    { ...t.sections.schools, path: "/para-escuelas", icon: sectionIcons[1] },
    { ...t.sections.children, path: "/para-ninos", icon: sectionIcons[2] },
  ];

  const featureData = [
    { ...t.features.coloradd, icon: <Palette className="h-7 w-7 text-secondary" />, path: "/coloradd" },
    { ...t.features.tests, icon: <Eye className="h-7 w-7 text-secondary" />, path: "/recursos" },
    { ...t.features.resources, icon: <BookOpen className="h-7 w-7 text-secondary" />, path: "/recursos" },
  ];

  const seo = language === 'es'
    ? { title: 'Guía Daltonismo Infantil | Para Padres y Escuelas', desc: 'Guía bilingüe sobre daltonismo infantil. Información, tests, ColorADD y recursos para padres, escuelas y niños.' }
    : { title: 'Childhood Color Blindness Guide for Parents & Schools', desc: 'Bilingual guide to childhood color blindness. Info, tests, ColorADD and resources for parents, schools and children.' };

  return (
    <div className="min-h-screen">
      <SEO
        title={seo.title}
        description={seo.desc}
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Guía Daltonismo Infantil",
            url: "https://guiadaltonismo.lovable.app/",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Guía Daltonismo Infantil",
            url: "https://guiadaltonismo.lovable.app/",
            inLanguage: ["es", "en"],
          },
        ]}
      />
      <HeroSection 
        title={t.hero.title} 
        subtitle={t.hero.subtitle}
        icon={<Eye className="h-12 w-12 md:h-14 md:w-14" />}
      >
        <Link to="/para-padres">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-smooth group">
            {t.hero.cta}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </HeroSection>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 pattern-grid" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {t.stats.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: t.stats.boys, label: t.stats.boysLabel, sub: t.stats.subtitle, color: "text-primary" },
              { value: t.stats.girls, label: t.stats.girlsLabel, sub: t.stats.subtitle, color: "text-secondary" },
              { value: t.stats.global, label: t.stats.globalLabel, sub: t.stats.subtitle, color: "text-accent-foreground" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-card rounded-2xl shadow-elegant border hover:shadow-lg transition-smooth"
              >
                <p className={`text-5xl font-extrabold ${stat.color} mb-1`}>{stat.value}</p>
                <p className="font-semibold text-foreground text-lg">{stat.label}</p>
                <p className="text-muted-foreground text-sm mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2>{t.sections.title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {sectionData.map((section, i) => (
              <SectionCard
                key={i}
                title={section.title}
                description={section.description}
                icon={section.icon}
              >
                <Link to={section.path}>
                  <Button className="w-full group rounded-xl">
                    {section.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </SectionCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              {language === 'es' ? 'Explora' : 'Explore'}
            </div>
            <h2 className="mb-3">{t.features.title}</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">{t.features.subtitle}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {featureData.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={feature.path} className="block group">
                  <div className="p-8 rounded-2xl border bg-card text-center hover:shadow-lg hover:-translate-y-1 transition-smooth">
                    <div className="inline-flex p-4 rounded-2xl bg-secondary-light mb-5">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-smooth">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <NextSection language={language} currentPath="/" />
    </div>
  );
};

export default Home;
