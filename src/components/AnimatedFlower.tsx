
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
      className="relative h-96 w-full flex items-center justify-center overflow-hidden cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Rose bouquet container */}
      <div className={`absolute z-30 transition-all duration-1000 ease-in-out ${animate ? 'scale-100' : 'scale-0'}`}>
        <div className="relative w-72 h-72">
          {/* Main centerpiece rose */}
          <div className={`absolute left-32 top-16 transition-all duration-500 ${hover ? 'scale-110' : 'scale-100'}`}>
            <div className="relative">
              {/* Inner petals - main rose */}
              <div className="absolute rounded-full bg-red-600 w-20 h-20 left-0 top-0" 
                style={{ boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)" }}></div>
                  
              {/* Outer petals - multiple layers for depth */}
              {[...Array(4)].map((_, i) => (
                [...Array(8)].map((_, j) => (
                  <div 
                    key={`petal-main-${i}-${j}`}
                    className="absolute rounded-full bg-gradient-to-br from-red-500 to-red-700 transition-all duration-700 ease-in-out opacity-90"
                    style={{
                      width: `${28 + i * 8}px`,
                      height: `${28 + i * 8}px`,
                      transform: `rotate(${j * 45}deg) translate(${9 + i * 6}px, 0)`,
                      transformOrigin: 'center',
                      boxShadow: "0 0 5px rgba(220, 38, 38, 0.3)",
                      left: '10px',
                      top: '10px',
                      zIndex: 20 - i
                    }}
                  ></div>
                ))
              ))}
            </div>
          </div>

          {/* Left rose */}
          <div className={`absolute left-10 top-24 scale-90 transition-all duration-500 ${hover ? 'scale-95' : 'scale-90'}`}>
            <div className="relative">
              {/* Inner petals */}
              <div className="absolute rounded-full bg-red-500 w-16 h-16 left-0 top-0" 
                style={{ boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)" }}></div>
                  
              {/* Outer petals */}
              {[...Array(3)].map((_, i) => (
                [...Array(8)].map((_, j) => (
                  <div 
                    key={`petal-left-${i}-${j}`}
                    className="absolute rounded-full bg-gradient-to-br from-red-400 to-red-600 transition-all duration-700 ease-in-out opacity-90"
                    style={{
                      width: `${22 + i * 8}px`,
                      height: `${22 + i * 8}px`,
                      transform: `rotate(${j * 45}deg) translate(${8 + i * 5}px, 0)`,
                      transformOrigin: 'center',
                      boxShadow: "0 0 5px rgba(220, 38, 38, 0.3)",
                      left: '8px',
                      top: '8px',
                      zIndex: 20 - i
                    }}
                  ></div>
                ))
              ))}
            </div>
          </div>

          {/* Right rose */}
          <div className={`absolute left-52 top-28 scale-85 transition-all duration-500 ${hover ? 'scale-90' : 'scale-85'}`}>
            <div className="relative">
              {/* Inner petals */}
              <div className="absolute rounded-full bg-pink-600 w-16 h-16 left-0 top-0" 
                style={{ boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)" }}></div>
                  
              {/* Outer petals */}
              {[...Array(3)].map((_, i) => (
                [...Array(8)].map((_, j) => (
                  <div 
                    key={`petal-right-${i}-${j}`}
                    className="absolute rounded-full bg-gradient-to-br from-pink-500 to-pink-700 transition-all duration-700 ease-in-out opacity-90"
                    style={{
                      width: `${22 + i * 8}px`,
                      height: `${22 + i * 8}px`,
                      transform: `rotate(${j * 45}deg) translate(${8 + i * 5}px, 0)`,
                      transformOrigin: 'center',
                      boxShadow: "0 0 5px rgba(220, 38, 38, 0.3)",
                      left: '8px',
                      top: '8px',
                      zIndex: 20 - i
                    }}
                  ></div>
                ))
              ))}
            </div>
          </div>

          {/* Top rose */}
          <div className={`absolute left-32 top-0 scale-80 transition-all duration-500 ${hover ? 'scale-85' : 'scale-80'}`}>
            <div className="relative">
              {/* Inner petals */}
              <div className="absolute rounded-full bg-rose-500 w-14 h-14 left-0 top-0" 
                style={{ boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)" }}></div>
                  
              {/* Outer petals */}
              {[...Array(3)].map((_, i) => (
                [...Array(8)].map((_, j) => (
                  <div 
                    key={`petal-top-${i}-${j}`}
                    className="absolute rounded-full bg-gradient-to-br from-rose-400 to-rose-600 transition-all duration-700 ease-in-out opacity-90"
                    style={{
                      width: `${20 + i * 7}px`,
                      height: `${20 + i * 7}px`,
                      transform: `rotate(${j * 45}deg) translate(${7 + i * 5}px, 0)`,
                      transformOrigin: 'center',
                      boxShadow: "0 0 5px rgba(220, 38, 38, 0.3)",
                      left: '7px',
                      top: '7px',
                      zIndex: 20 - i
                    }}
                  ></div>
                ))
              ))}
            </div>
          </div>

          {/* Bottom rose */}
          <div className={`absolute left-24 top-40 scale-75 transition-all duration-500 ${hover ? 'scale-80' : 'scale-75'}`}>
            <div className="relative">
              {/* Inner petals */}
              <div className="absolute rounded-full bg-red-400 w-14 h-14 left-0 top-0" 
                style={{ boxShadow: "0 0 15px rgba(220, 38, 38, 0.5)" }}></div>
                  
              {/* Outer petals */}
              {[...Array(3)].map((_, i) => (
                [...Array(8)].map((_, j) => (
                  <div 
                    key={`petal-bottom-${i}-${j}`}
                    className="absolute rounded-full bg-gradient-to-br from-red-300 to-red-500 transition-all duration-700 ease-in-out opacity-90"
                    style={{
                      width: `${20 + i * 7}px`,
                      height: `${20 + i * 7}px`,
                      transform: `rotate(${j * 45}deg) translate(${7 + i * 5}px, 0)`,
                      transformOrigin: 'center',
                      boxShadow: "0 0 5px rgba(220, 38, 38, 0.3)",
                      left: '7px',
                      top: '7px',
                      zIndex: 20 - i
                    }}
                  ></div>
                ))
              ))}
            </div>
          </div>
        
          {/* Stems and leaves */}
          <div className="absolute w-4 bg-gradient-to-b from-green-600 to-green-500 rounded-sm bottom-0 left-36 h-40"
            style={{ transformOrigin: 'bottom center', zIndex: 5 }}>
            {/* Thorns */}
            <div className="absolute -left-2 top-10 w-3 h-2 bg-green-700 rounded-sm rotate-45"></div>
            <div className="absolute -right-2 top-24 w-3 h-2 bg-green-700 rounded-sm -rotate-45"></div>
            
            {/* Main stem leaves */}
            <div className="absolute -left-8 top-16 w-10 h-5 bg-gradient-to-r from-green-600 to-green-500 rounded-full -rotate-45 origin-right"></div>
            <div className="absolute -right-8 top-32 w-10 h-5 bg-gradient-to-l from-green-600 to-green-500 rounded-full rotate-45 origin-left"></div>
          </div>

          {/* Left rose stem */}
          <div className="absolute w-3 bg-gradient-to-b from-green-600 to-green-500 rounded-sm bottom-0 left-16 h-32"
            style={{ transformOrigin: 'bottom center', zIndex: 4 }}>
            {/* Leaves */}
            <div className="absolute -left-6 top-12 w-8 h-4 bg-gradient-to-r from-green-600 to-green-500 rounded-full -rotate-45 origin-right"></div>
          </div>

          {/* Right rose stem */}
          <div className="absolute w-3 bg-gradient-to-b from-green-600 to-green-500 rounded-sm bottom-0 left-56 h-36"
            style={{ transformOrigin: 'bottom center', zIndex: 4 }}>
            {/* Leaves */}
            <div className="absolute -right-6 top-18 w-8 h-4 bg-gradient-to-l from-green-600 to-green-500 rounded-full rotate-45 origin-left"></div>
          </div>
        </div>
      </div>

      {/* Special message with subtle animation */}
      <div 
        className={`absolute -top-12 font-handwriting text-primary text-3xl 
          transition-all duration-500 ease-in-out
          ${hover ? 'opacity-100 scale-110' : 'opacity-90 scale-100'}`}
        style={{ textShadow: "0 0 5px rgba(220, 38, 38, 0.3)" }}
      >
        Te amo cada dia mais...
      </div>
      
      {/* Petal fall animation */}
      {hover && [...Array(8)].map((_, i) => (
        <div 
          key={`falling-petal-${i}`}
          className="absolute h-3 w-3 bg-red-400 rounded-full animate-fall z-40 opacity-70"
          style={{ 
            left: `${25 + Math.random() * 50}%`,
            top: '30%',
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
      
      <style>
        {`
          @keyframes fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
            100% { transform: translateY(250px) rotate(360deg); opacity: 0; }
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
