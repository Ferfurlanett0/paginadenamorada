
import RoadTimeline from "../components/RoadTimeline";
import FloatingHearts from "../components/FloatingHearts";

const Index = () => {
  return (
    <div className="relative min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #ffdee2 0%, #ffe8cc 50%, #ffdee9 100%)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <FloatingHearts />
      <RoadTimeline />
    </div>
  );
};

export default Index;
