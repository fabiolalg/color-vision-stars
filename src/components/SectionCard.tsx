import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SectionCardProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const SectionCard = ({ title, description, icon, children, className = "" }: SectionCardProps) => {
  return (
    <Card className={`gradient-card shadow-elegant transition-smooth hover:shadow-lg hover:scale-[1.02] ${className}`}>
      <CardHeader>
        {icon && (
          <div className="mb-4 flex justify-center md:justify-start">
            {icon}
          </div>
        )}
        <CardTitle className="text-2xl">{title}</CardTitle>
        {description && <CardDescription className="text-base">{description}</CardDescription>}
      </CardHeader>
      {children && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </Card>
  );
};

export default SectionCard;
