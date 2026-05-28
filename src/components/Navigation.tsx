import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Eye } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavigationProps {
  language: 'es' | 'en';
  onLanguageToggle: () => void;
}

const Navigation = ({ language, onLanguageToggle }: NavigationProps) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = language === 'es' ? [
    { path: "/", label: "Inicio" },
    { path: "/para-padres", label: "Para Padres" },
    { path: "/para-escuelas", label: "Para Escuelas" },
    { path: "/para-ninos", label: "Para Niños" },
    { path: "/recursos", label: "Recursos" },
  ] : [
    { path: "/", label: "Home" },
    { path: "/para-padres", label: "For Parents" },
    { path: "/para-escuelas", label: "For Schools" },
    { path: "/para-ninos", label: "For Children" },
    { path: "/recursos", label: "Resources" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const langLabel = language === 'es' ? 'Switch to English' : 'Cambiar a Español';
  const menuLabel = isOpen
    ? (language === 'es' ? 'Cerrar menú' : 'Close menu')
    : (language === 'es' ? 'Abrir menú' : 'Open menu');

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl transition-smooth hover:opacity-80">
            <Eye className="h-6 w-6 text-primary" />
            <span className="hidden sm:inline text-foreground">
              {language === 'es' ? 'Guía Daltonismo' : 'Color Blindness Guide'}
            </span>
            <span className="sm:hidden text-foreground">Guía</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  className="transition-smooth"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={onLanguageToggle}
              className="ml-2 transition-smooth text-lg"
              title={langLabel}
              aria-label={langLabel}
            >
              {language === 'es' ? '🇪🇸' : '🇬🇧'}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={onLanguageToggle}
              className="text-lg"
              title={langLabel}
              aria-label={langLabel}
            >
              {language === 'es' ? '🇪🇸' : '🇬🇧'}
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label={menuLabel}>
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-2 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
                      <Button
                        variant={isActive(item.path) ? "default" : "ghost"}
                        className="w-full justify-start text-lg"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
