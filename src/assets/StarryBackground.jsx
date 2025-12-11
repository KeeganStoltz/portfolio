import React, { useRef, useEffect } from "react";

export default function StarryBackground({ starCount = 180 }) {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    // Initialize stars
    stars.current = Array.from({ length: starCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.7 + 0.3,
      delta: Math.random() * 0.005 + 0.005, // for twinkle speed
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.current.forEach((star) => {
        // twinkle effect
        star.alpha += star.delta;
        if (star.alpha > 1 || star.alpha < 0.3) star.delta *= -1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ width: "100vw", height: "100dvh" }}
    />
  );
}
