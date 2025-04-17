import { Camera } from "lucide-react";
import { useState, useEffect } from "react";
interface Milestone {
  id: number;
  title: string;
  date: string;
  description: string;
  image?: string;
}
interface MilestoneCardProps {
  milestone: Milestone;
  isEven: boolean;
  isLast: boolean;
}
const MilestoneCard = ({
  milestone,
  isEven,
  isLast
}: MilestoneCardProps) => {
  const [image, setImage] = useState<string | undefined>(milestone.image);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = event => {
        if (event.target?.result) {
          setImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-24 relative`}>
      {/* Circle marker on the road */}
      <div className="absolute left-1/2 transform -translate-x-2/2 w-12 h-12 rounded-full bg-primary shadow-lg z-20 flex items-center justify-center hover:scale-110 transition-transform">
        <span className="text-white font-bold">{milestone.id}</span>
      </div>
      
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'} text-center md:text-left ${isEven ? 'md:text-right' : ''}`}>
        <div className={`bg-white p-6 rounded-lg shadow-lg border-2 border-primary/20 mb-4 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
          <h3 className="text-2xl font-handwriting text-primary mb-1">{milestone.title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{milestone.date}</p>
          <p className="text-foreground">{milestone.description}</p>
          
          {/* Extra decorative elements */}
          <div className="flex justify-center mt-3">
            {[...Array(3)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/50 mx-1 animate-pulse"></div>)}
          </div>
        </div>
      </div>
      
      {/* Photo space */}
      <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-12' : 'md:pr-12'} mt-8 md:mt-0`}>
        <div className="relative bg-secondary border-8 border-white shadow-lg rounded-md overflow-hidden hover:shadow-2xl transition-shadow duration-300" style={{
        paddingBottom: '150%'
      }}>
          {image ? <img src={image} alt={`Foto de ${milestone.title}`} className="absolute inset-0 w-full h-full object-cover" /> : <div className="absolute inset-0 flex flex-col items-center justify-center bg-accent/20 p-4">
              <Camera size={48} className="text-muted-foreground mb-2" />
              <p className="text-muted-foreground text-center mb-4">Adicione uma foto especial aqui</p>
              <label className="cursor-pointer px-4 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors">
                Upload Foto
                <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
            </div>}

          {/* Decorative elements */}
          <div className="absolute top-1 left-1 w-3 h-3 bg-secondary border border-primary/20 rounded-full"></div>
          <div className="absolute top-1 right-1 w-3 h-3 bg-secondary border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-1 left-1 w-3 h-3 bg-secondary border border-primary/20 rounded-full"></div>
          <div className="absolute bottom-1 right-1 w-3 h-3 bg-secondary border border-primary/20 rounded-full"></div>
          
          {/* Decorative ribbon */}
          <div className="absolute -top-1 -right-1 w-24 h-24 overflow-hidden">
            <div className="absolute top-0 right-0 transform rotate-45 bg-primary/70 text-white py-1 px-8 text-xs font-semibold shadow-sm" style={{
            width: '120px',
            top: '15px',
            right: '-30px'
          }}>
              Amor Eterno
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default MilestoneCard;