
import { Heart, Camera } from "lucide-react";
import { useState } from "react";
import MilestoneCard from "./MilestoneCard";
import AnimatedFlower from "./AnimatedFlower";
import FloatingHearts from "./FloatingHearts";

interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
}

const RoadTimeline = () => {
  const [milestones] = useState<Milestone[]>([
    {
      id: 1,
      title: "Nosso primeiro encontro",
      date: "Início da jornada",
      description: "Aquele momento especial quando nossos olhares se cruzaram pela primeira vez."
    },
    {
      id: 2,
      title: "Primeiro beijo",
      date: "Um mês depois",
      description: "O momento mágico que nunca vamos esquecer."
    },
    {
      id: 3,
      title: "Namoro oficial",
      date: "Três meses depois",
      description: "Quando decidimos começar oficialmente nossa história juntos."
    },
    {
      id: 4,
      title: "Nossa primeira viagem",
      date: "Seis meses de amor",
      description: "Momentos inesquecíveis explorando lugares novos juntos."
    },
    {
      id: 5,
      title: "Conhecendo a família",
      date: "Nove meses de amor",
      description: "Expandindo nosso amor para nossas famílias."
    },
    {
      id: 6,
      title: "1 ano juntos!",
      date: "Um ano de amor",
      description: "Celebrando 365 dias de momentos especiais."
    },
    {
      id: 7,
      title: "1 ano e 3 meses",
      date: "Hoje",
      description: "Olhando para trás com carinho e para frente com esperança."
    }
  ]);

  return (
    <div className="min-h-screen bg-background pb-20">
      <FloatingHearts />
      <header className="py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-70 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-handwriting text-primary mb-4 animate-float">Nossa Jornada de Amor</h1>
          <h2 className="text-2xl md:text-3xl font-romantic text-foreground mb-8">1 ano e 3 meses de momentos especiais</h2>
          
          <div className="flex items-center justify-center space-x-2">
            <Heart className="text-primary animate-pulse-slow" fill="currentColor" />
            <span className="text-xl font-romantic">Uma estrada de memórias</span>
            <Heart className="text-primary animate-pulse-slow" fill="currentColor" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 relative">
        {/* Road path */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 md:w-12 bg-secondary h-full rounded-full shadow-inner z-0"></div>
        
        {/* Milestones */}
        <div className="relative z-10">
          {milestones.map((milestone, index) => (
            <MilestoneCard 
              key={milestone.id} 
              milestone={milestone} 
              isEven={index % 2 === 0} 
              isLast={index === milestones.length - 1}
            />
          ))}
        </div>

        {/* Continues section */}
        <div className="relative z-10 mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-handwriting text-primary mb-2 animate-pulse-slow">Continua...</h2>
          <p className="text-xl font-romantic text-muted-foreground mb-8">Nossa história está apenas começando</p>
          
          <div className="mt-12">
            <AnimatedFlower />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadTimeline;
