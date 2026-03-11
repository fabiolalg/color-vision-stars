import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NextSectionProps {
  language: 'es' | 'en';
  currentPath: string;
}

const sections = [
  { path: '/', es: 'Inicio', en: 'Home' },
  { path: '/para-padres', es: 'Para Padres', en: 'For Parents' },
  { path: '/para-escuelas', es: 'Para Escuelas', en: 'For Schools' },
  { path: '/para-ninos', es: 'Para Niños', en: 'For Children' },
  { path: '/recursos', es: 'Recursos', en: 'Resources' },
];

const NextSection = ({ language, currentPath }: NextSectionProps) => {
  const currentIndex = sections.findIndex(s => s.path === currentPath);
  if (currentIndex === -1 || currentIndex >= sections.length - 1) return null;

  const next = sections[currentIndex + 1];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto flex justify-end">
        <Link to={next.path}>
          <Button
            variant="outline"
            size="lg"
            className="group gap-2 text-base border-primary/30 hover:border-primary hover:bg-primary/5 transition-smooth"
          >
            {language === 'es' ? 'Siguiente: ' : 'Next: '}
            <span className="font-semibold">{next[language]}</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NextSection;
