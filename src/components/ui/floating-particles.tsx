import React from 'react';

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Small white particles */}
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-drift"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.3 + 0.1,
            animationDelay: `${Math.random() * 30}s`,
            animationDuration: `${Math.random() * 20 + 25}s`,
          }}
        />
      ))}
      
      {/* Medium floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`medium-${i}`}
          className="absolute bg-white rounded-full animate-float"
          style={{
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.2 + 0.05,
            animationDelay: `${Math.random() * 25}s`,
            animationDuration: `${Math.random() * 15 + 20}s`,
          }}
        />
      ))}
      
      {/* Larger glowing particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`glow-${i}`}
          className="absolute bg-blue-300 rounded-full animate-pulse-slow blur-sm"
          style={{
            width: `${Math.random() * 6 + 3}px`,
            height: `${Math.random() * 6 + 3}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${Math.random() * 8 + 12}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;