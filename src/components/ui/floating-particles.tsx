import React from 'react';

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-20 animate-float"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        />
      ))}
      
      {/* Larger glowing particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`glow-${i}`}
          className="absolute bg-blue-400 rounded-full opacity-10 animate-pulse-slow blur-sm"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 5 + 8}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;