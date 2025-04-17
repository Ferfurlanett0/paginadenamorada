
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
      className="relative h-64 w-full flex items-center justify-center overflow-hidden cursor-pointer" 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Center of flower */}
      <div className={`absolute z-20 w-16 h-16 rounded-full bg-yellow-400 shadow-lg 
        transition-all duration-1000 ease-in-out ${animate ? 'scale-100' : 'scale-0'}
        ${hover ? 'animate-spin-slow' : ''}`}>
      </div>
      
      {/* Flower petals */}
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className={`absolute w-24 h-16 origin-left
            transition-all duration-1000 ease-in-out delay-${i * 100}
            ${animate ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transform: `rotate(${i * 45}deg) translateX(${hover ? '12' : '8'}px)`,
            transformOrigin: 'center left',
            transition: `transform 0.8s ease-in-out, opacity 1s ease-in-out ${i * 0.1}s`
          }}
        >
          <div 
            className={`w-full h-full rounded-full bg-primary animate-pulse-slow`}
            style={{
              animationDelay: `${i * 0.2}s`,
              backgroundColor: i % 2 === 0 ? 'rgb(var(--primary))' : 'rgb(var(--accent))'
            }}
          ></div>
        </div>
      ))}

      {/* Stem */}
      <div 
        className={`absolute w-3 bg-green-500 rounded-full bottom-0 
          transition-all duration-1000 ease-in-out ${animate ? 'h-32' : 'h-0'}`}
        style={{ transformOrigin: 'bottom center', zIndex: 0 }}
      >
        {/* Leaves */}
        <div className="absolute -left-6 top-12 w-8 h-4 bg-green-400 rounded-full -rotate-45 origin-right"></div>
        <div className="absolute -right-6 top-20 w-8 h-4 bg-green-400 rounded-full rotate-45 origin-left"></div>
      </div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className={`absolute w-2 h-2 rounded-full bg-primary/40 
            animate-float opacity-0 ${animate ? 'opacity-60' : ''}`}
          style={{
            top: `${30 + Math.random() * 40}%`,
            left: `${30 + Math.random() * 40}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${i * 0.3}s`,
            backgroundColor: Math.random() > 0.5 ? 'rgb(var(--primary) / 0.4)' : 'rgb(var(--accent) / 0.4)'
          }}
        ></div>
      ))}
      
      {/* Special message */}
      <div 
        className={`absolute -top-16 font-handwriting text-primary text-2xl
          transition-all duration-500 ease-in-out transform
          ${hover ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      >
        Te amo cada dia mais...
      </div>
    </div>
  );
};

export default AnimatedFlower;
