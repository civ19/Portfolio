/*
import React, { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const numStars = Math.min(Math.floor((width * height) / 7000), 220);

    function initStars() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < numStars; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const radius = Math.random() * 1.4 + 0.3;
        const alpha = Math.random() * 0.8 + 0.2;
        const color =
          Math.random() > 0.75
            ? "rgba(165, 243, 252, "
            : "rgba(248, 250, 252, ";

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${alpha})`;
        ctx.shadowBlur = radius > 1.2 ? 6 : 0;
        ctx.shadowColor = "rgba(45, 212, 191, 0.6)";
        ctx.fill();
      }
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    initStars();
    window.addEventListener("resize", handleResize);

    return () => {
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
*/