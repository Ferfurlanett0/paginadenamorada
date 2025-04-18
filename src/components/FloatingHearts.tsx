
import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);
  
  useEffect(() => {
    // Create initial hearts
    const initialHearts: Heart[] = [];
    for (let i = 0; i < 15; i++) {
      initialHearts.push(createHeart(i));
    }
    setHearts(initialHearts);
    
    // Add a new heart periodically
    const interval = setInterval(() => {
      setHearts(prevHearts => {
        const newHearts = [...prevHearts];
        // Remove oldest heart if we have too many
        if (newHearts.length > 20) {
          newHearts.shift();
        }
        // Add a new heart with a unique ID
        newHearts.push(createHeart(Date.now()));
        return newHearts;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const createHeart = (id: number): Heart => {
    return {
      id,
      x: Math.random() * 100,
      y: Math.random() * 30, // Start at different heights
      size: 10 + Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.5,
      animationDuration: 10 + Math.random() * 20
    };
  };
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute text-primary"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            opacity: heart.opacity,
            fontSize: `${heart.size}px`,
            animation: `float ${heart.animationDuration}s linear infinite`,
            transform: `translateY(-${heart.y * 10}px)`,
            zIndex: -1
          }}
        >
          ❤️
        </div>
      ))}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-1000px) rotate(${Math.random() * 360}deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingHearts;
