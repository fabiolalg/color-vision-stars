import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbsProps {
  language: 'es' | 'en';
}

const routeLabels: Record<string, { es: string; en: string }> = {
  '/': { es: 'Inicio', en: 'Home' },
  '/para-padres': { es: 'Para Padres', en: 'For Parents' },
  '/para-escuelas': { es: 'Para Escuelas', en: 'For Schools' },
  '/para-ninos': { es: 'Para Niños', en: 'For Children' },
  '/recursos': { es: 'Recursos', en: 'Resources' },
};

const Breadcrumbs = ({ language }: BreadcrumbsProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Don't show breadcrumbs on home page
  if (currentPath === '/') return null;

  const currentLabel = routeLabels[currentPath]?.[language] ?? '';

  return (
    <div className="w-full border-b bg-muted/30">
      <div className="container mx-auto px-4">
        <nav className="flex items-center gap-1.5 py-2.5 text-sm" aria-label="Breadcrumb">
          <Link
            to="/"
            className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span>{language === 'es' ? 'Inicio' : 'Home'}</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/50" />
          <span className="font-medium text-foreground">{currentLabel}</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumbs;
