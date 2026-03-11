import { Heart, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  language: 'es' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    es: {
      madeWith: "Hecho con",
      forFamilies: "para familias y educadores",
      contact: "Contacto",
      sections: "Secciones principales",
      about: "Sobre esta guía",
    },
    en: {
      madeWith: "Made with",
      forFamilies: "for families and educators",
      contact: "Contact",
      sections: "Main sections",
      about: "About this guide",
    },
  };

  const t = content[language];

  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg mb-4">{t.about}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {language === 'es' 
                ? 'Una guía completa sobre daltonismo infantil para padres, escuelas y niños.'
                : 'A comprehensive guide about childhood color blindness for parents, schools, and children.'}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg mb-4">{t.sections}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/para-padres" className="text-muted-foreground hover:text-primary transition-smooth">
                  {language === 'es' ? 'Para Padres' : 'For Parents'}
                </Link>
              </li>
              <li>
                <Link to="/para-escuelas" className="text-muted-foreground hover:text-primary transition-smooth">
                  {language === 'es' ? 'Para Escuelas' : 'For Schools'}
                </Link>
              </li>
              <li>
                <Link to="/para-ninos" className="text-muted-foreground hover:text-primary transition-smooth">
                  {language === 'es' ? 'Para Niños' : 'For Children'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg mb-4">{t.contact}</h3>
            <a 
              href="mailto:Fabiola.lopina+daltonismo@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-smooth text-sm"
            >
              <Mail className="h-4 w-4" />
              Fabiola.lopina+daltonismo@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            {t.madeWith} <Heart className="h-4 w-4 text-destructive fill-destructive" /> {t.forFamilies}
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © {new Date().getFullYear()} {language === 'es' ? 'Guía Daltonismo' : 'Color Blindness Guide'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
