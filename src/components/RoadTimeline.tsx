
import { Heart, Camera } from "lucide-react";
import { useState } from "react";
import MilestoneCard from "./MilestoneCard";
import AnimatedFlower from "./AnimatedFlower";

interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

const RoadTimeline = () => {
  const [milestones] = useState<Milestone[]>([
    {
      id: 1,
      title: "Nosso primeiro encontro",
      date: "Início da jornada",
      description: "Aquele momento especial quando nossos olhares se cruzaram pela primeira vez.",
      image: "/7c52ae50-b580-4018-97d8-cf6cc1bfdd82.png"
    },
    {
      id: 2,
      title: "Primeiro beijo",
      date: "Um mês depois",
      description: "O momento mágico que nunca vamos esquecer.",
      image: "/0d2eed64-7595-439c-a246-cacf3306d6ec.png"
    },
    {
      id: 3,
      title: "Namoro oficial",
      date: "Três meses depois",
      description: "Quando decidimos começar oficialmente nossa história juntos.",
      image: "/c8a84603-0ac0-41aa-b1d3-9c39aa599bb2.png"
    },
    {
      id: 4,
      title: "Um dos nossos primeiros eventos em familia",
      date: "Seis meses de amor",
      description: "Momentos que eu terei guardado para sempre.",
      image: "/891f11a3-d95b-47c4-a3dc-529264d6971a.png"
    },
    {
      id: 5,
      title: "Nossa primeira viagem em famlia juntos",
      date: "Nove meses de amor",
      description: "Momentos inesquecíveis explorando lugares novos juntos.",
      image: "/8cb7b3ca-1675-4579-a336-b3b1874caef2.png"
    },
    {
      id: 6,
      title: "1 ano juntos!",
      date: "Um ano de amor",
      description: "Celebrando 365 dias de momentos especiais.",
      image: "/39bbda82-3e13-4f07-99bc-a6fa3872acf1.png"
    },
    {
      id: 7,
      title: "1 ano e 3 meses",
      date: "Hoje",
      description: "Olhando para trás com carinho e para frente com esperança.",
      image: "/18403ffe-dfd1-4b11-968f-a804d8f83c38.png"
    }
  ]);

  return (
    <div className="min-h-screen pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/60 via-white/40 to-pink-100/60 -z-10"></div>
      
      <header 
        className="py-16 text-center relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(255,192,203,0.4) 0%, rgba(255,105,180,0.3) 100%), url("/placeholder.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'soft-light'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/30 via-purple-100/30 to-pink-100/30 opacity-80 -z-10"></div>
        
        <div className="container mx-auto px-4 relative">
          {/* Nomes do casal */}
          <div className="mb-6 transform -rotate-2">
            <h1 className="text-6xl md:text-7xl font-handwriting text-primary inline-block relative">
              Fernando 
              <span className="text-5xl md:text-6xl absolute -right-6 top-0 transform -rotate-12">❤️</span>
            </h1>
            <span className="mx-3 text-4xl text-foreground">&</span>
            <h1 className="text-6xl md:text-7xl font-handwriting text-primary inline-block">
              Ana Laura
            </h1>
          </div>

          <h1 className="text-5xl md:text-6xl font-handwriting text-primary mb-4">Nossa Jornada de Amor</h1>
          <h2 className="text-2xl md:text-3xl font-romantic text-foreground mb-8">1 ano e 3 meses de momentos especiais</h2>
          
          <div className="flex items-center justify-center space-x-2">
            <Heart className="text-primary" fill="currentColor" />
            <span className="text-xl font-romantic">Uma estrada de memórias</span>
            <Heart className="text-primary" fill="currentColor" />
          </div>

          {/* Decoração adicional */}
          <div className="absolute left-4 top-8 w-16 h-16 rotate-12 opacity-40">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-primary">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute right-4 top-8 w-16 h-16 -rotate-12 opacity-40">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-primary">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 relative">
        {/* Road path - estrada mais bonita */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-8 md:w-12 bg-gradient-to-b from-secondary via-pink-100 to-secondary h-full rounded-full shadow-inner z-0"></div>
        
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
          
          {/* Assinatura do casal */}
          <div className="mt-16 mb-8">
            <div className="flex justify-center items-center space-x-4">
              <p className="text-2xl font-handwriting text-primary transform -rotate-6">Fernando</p>
              <Heart className="text-primary" fill="currentColor" />
              <p className="text-2xl font-handwriting text-primary transform rotate-6">Ana Laura</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Para sempre juntos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadTimeline;
