import React, { useMemo } from 'react';

const FloatingParticles = () => {
  const particles = useMemo(() => {
    const smallParticles = Array.from({ length: 25 }, (_, i) => ({
      id: `small-${i}`,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.3 + 0.1,
      delay: Math.random() * 30,
      duration: Math.random() * 20 + 25,
      type: 'drift'
    }));

    const mediumParticles = Array.from({ length: 15 }, (_, i) => ({
      id: `medium-${i}`,
      size: Math.random() * 3 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.2 + 0.05,
      delay: Math.random() * 25,
      duration: Math.random() * 15 + 20,
      type: 'float'
    }));

    const glowParticles = Array.from({ length: 8 }, (_, i) => ({
      id: `glow-${i}`,
      size: Math.random() * 6 + 3,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 8 + 12,
      type: 'pulse'
    }));

    return [...smallParticles, ...mediumParticles, ...glowParticles];
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${
            particle.type === 'pulse' 
              ? 'bg-blue-300 animate-pulse-slow blur-sm' 
              : `bg-white animate-${particle.type}`
          }`}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity || 0.1,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;