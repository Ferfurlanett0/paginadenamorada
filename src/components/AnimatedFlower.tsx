
import { useState, useEffect } from 'react';

const AnimatedFlower = () => {
  const [animate, setAnimate] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    setAnimate(true);
    
    // Add some animation delay for a more natural effect
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div 
      className="relative h-72 w-full flex items-center justify-center overflow-hidden cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Rose bloom */}
      <div className={`absolute z-30 transition-all duration-1000 ease-in-out ${animate ? 'scale-100' : 'scale-0'}`}>
        <div className="relative">
          {/* Inner petals */}
          <div className={`absolute rounded-full bg-red-600 w-16 h-16 left-0 top-0 transition-all duration-500 ${hover ? 'scale-110' : ''}`} 
               style={{ boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)" }}></div>
               
          {/* Outer petals - multiple layers for depth */}
          {[...Array(3)].map((_, i) => (
            [...Array(8)].map((_, j) => (
              <div 
                key={`petal-${i}-${j}`}
                className={`absolute rounded-full bg-gradient-to-br from-red-500 to-red-700 transition-all duration-700 ease-in-out
                           ${animate ? 'opacity-90' : 'opacity-0'}`}
                style={{
                  width: `${24 + i * 8}px`,
                  height: `${24 + i * 8}px`,
                  transform: `rotate(${j * 45}deg) translate(${8 + i * 6}px, 0) ${hover ? 'scale(1.1)' : ''}`,
                  transformOrigin: 'center',
                  boxShadow: "0 0 5px rgba(220, 38, 38, 0.3)",
                  left: '8px',
                  top: '8px',
                  zIndex: 20 - i
                }}
              ></div>
            ))
          ))}
          
          {/* Rose center shadow */}
          <div className="absolute rounded-full bg-red-800 w-12 h-12 left-2 top-2 z-10 opacity-50"></div>
        </div>
      </div>
      
      {/* Stem */}
      <div 
        className={`absolute w-3 bg-gradient-to-b from-green-600 to-green-500 rounded-sm bottom-0 
          transition-all duration-1000 ease-in-out ${animate ? 'h-40' : 'h-0'}`}
        style={{ transformOrigin: 'bottom center', zIndex: 5 }}
      >
        {/* Thorns */}
        <div className="absolute -left-2 top-10 w-3 h-2 bg-green-700 rounded-sm rotate-45"></div>
        <div className="absolute -right-2 top-24 w-3 h-2 bg-green-700 rounded-sm -rotate-45"></div>
        
        {/* Leaves */}
        <div className="absolute -left-8 top-16 w-10 h-5 bg-gradient-to-r from-green-600 to-green-500 rounded-full -rotate-45 origin-right"></div>
        <div className="absolute -right-8 top-32 w-10 h-5 bg-gradient-to-l from-green-600 to-green-500 rounded-full rotate-45 origin-left"></div>
      </div>

      {/* Special message with subtle animation */}
      <div 
        className={`absolute -top-12 font-handwriting text-primary text-2xl 
          transition-all duration-500 ease-in-out
          ${hover ? 'opacity-100 scale-110' : 'opacity-90 scale-100'}`}
        style={{ textShadow: "0 0 5px rgba(220, 38, 38, 0.3)" }}
      >
        Te amo cada dia mais...
      </div>
      
      {/* Petal fall animation */}
      {hover && [...Array(5)].map((_, i) => (
        <div 
          key={`falling-petal-${i}`}
          className="absolute h-3 w-3 bg-red-400 rounded-full animate-fall z-40 opacity-70"
          style={{ 
            left: `${45 + Math.random() * 10}%`,
            top: '30%',
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
      
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
            100% { transform: translateY(150px) rotate(360deg); opacity: 0; }
          }
          .animate-fall {
            animation: fall 4s ease-in-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedFlower;
