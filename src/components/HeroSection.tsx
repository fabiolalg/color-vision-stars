import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  icon?: ReactNode;
}

const HeroSection = ({ title, subtitle, children, icon }: HeroSectionProps) => {
  return (
    <section className="relative gradient-hero text-primary-foreground py-20 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {icon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center mb-8"
            >
              <div className="p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10">
                {icon}
              </div>
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 leading-[1.1]"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg md:text-xl mb-10 text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
