import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  icon?: ReactNode;
}

const HeroSection = ({ title, subtitle, children, icon }: HeroSectionProps) => {
  return (
    <section className="gradient-hero text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {icon && (
            <div className="flex justify-center mb-6">
              {icon}
            </div>
          )}
          <h1 className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              {subtitle}
            </p>
          )}
          {children && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
