
import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  x: number;
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
        // Add a new heart
        newHearts.push(createHeart(prevHearts.length + 1));
        return newHearts;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const createHeart = (id: number): Heart => {
    return {
      id,
      x: Math.random() * 100,
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
          className="absolute bottom-0 text-primary"
          style={{
            left: `${heart.x}%`,
            opacity: heart.opacity,
            fontSize: `${heart.size}px`,
            animation: `float ${heart.animationDuration}s linear infinite`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
