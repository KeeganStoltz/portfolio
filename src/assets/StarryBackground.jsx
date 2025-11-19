import React, { useMemo } from "react";

export default function StarryBackground({ starCount = 160 }) {
  const stars = useMemo(() => {
    const s = [];
    for (let i = 0; i < starCount; i++) {
      s.push({
        id: i,
        size: `${Math.random() * 2 + 0.5}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.7 + 0.3,
        duration: `${Math.random() * 6 + 3}s`,
        delay: `${Math.random() * 6}s`
      });
    }
    return s;
  }, [starCount]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-black to-indigo-950" />

      {/* Nebula blur */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[1400px] h-[420px] opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255,255,255,0.06), transparent 40%)"
        }}
      />

      {/* Tiny stars */}
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white/90 animate-twinkle"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            opacity: s.opacity,
            animationDuration: s.duration,
            animationDelay: s.delay
          }}
        />
      ))}

      {/* Larger slow-pulse stars */}
      {[...Array(10)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/80 blur-sm animate-pulse-slow"
          style={{
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`
          }}
        />
      ))}

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { opacity: 0.2; transform: scale(0.95); }
        }
        .animate-twinkle {
          animation-name: twinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @keyframes pulse-slow {
          0% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.3; transform: scale(0.95); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
