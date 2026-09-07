import React, { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    window.addEventListener("resize", handleResize);

    const numStars = Math.min(Math.floor((width * height) / 7000), 220);
    let stars = [];

    function initStars() {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.4 + 0.3,
          alpha: Math.random() * 0.8 + 0.2,
          alphaDelta: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
          speedY: (Math.random() * 0.15 + 0.03) * -1, // gentle upward drift
          color: Math.random() > 0.75 ? "rgba(165, 243, 252, " : "rgba(248, 250, 252, ", // subtle cyan tint for some
        });
      }
    }

    initStars();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Pulse alpha
        star.alpha += star.alphaDelta;
        if (star.alpha > 0.95) {
          star.alpha = 0.95;
          star.alphaDelta = -Math.abs(star.alphaDelta);
        } else if (star.alpha < 0.15) {
          star.alpha = 0.15;
          star.alphaDelta = Math.abs(star.alphaDelta);
        }

        // Drift
        star.y += star.speedY;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${star.alpha})`;
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = "rgba(45, 212, 191, 0.6)";
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
