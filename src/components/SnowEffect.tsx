import React, { useMemo } from 'react';

interface SnowEffectProps {
  enabled: boolean;
}

export const SnowEffect: React.FC<SnowEffectProps> = ({ enabled }) => {
  const flakes = useMemo(() => {
    return Array.from({ length: 36 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 8 + 7,
      delay: Math.random() * 6,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white shadow-sm"
          style={{
            left: `${flake.left}%`,
            top: '-20px',
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animation: `snowFall ${flake.duration}s linear infinite`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes snowFall {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) translateX(25px);
          }
          100% {
            transform: translateY(105vh) rotate(360deg) translateX(-20px);
          }
        }
      `}</style>
    </div>
  );
};
