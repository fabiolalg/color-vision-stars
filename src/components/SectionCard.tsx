import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const SectionCard = ({ title, description, icon, children, className = "" }: SectionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`rounded-2xl border bg-card text-card-foreground p-8 shadow-elegant transition-smooth hover:shadow-lg hover:-translate-y-1 ${className}`}
    >
      {icon && (
        <div className="mb-5 flex justify-center md:justify-start">
          <div className="p-3 rounded-xl bg-accent">
            {icon}
          </div>
        </div>
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {description && <p className="text-muted-foreground leading-relaxed">{description}</p>}
      {children && <div className="mt-5">{children}</div>}
    </motion.div>
  );
};

export default SectionCard;
