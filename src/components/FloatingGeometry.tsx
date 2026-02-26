import { useEffect, useRef } from "react";

export const FloatingGeometry = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Minimal floating orbs
    const orbs = Array.from({ length: 12 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: 2 + Math.random() * 4,
      hue: [172, 38, 200][Math.floor(Math.random() * 3)],
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      // Draw connections
      for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
          const dx = orbs[i].x - orbs[j].x;
          const dy = orbs[i].y - orbs[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(172, 50%, 50%, ${0.03 * (1 - dist / 200)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(orbs[i].x, orbs[i].y);
            ctx.lineTo(orbs[j].x, orbs[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw orbs
      orbs.forEach((orb) => {
        const pulse = Math.sin(time + orb.phase) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${orb.hue}, 60%, 55%, ${0.08 * pulse})`;
        ctx.fill();

        // Soft glow
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${orb.hue}, 60%, 55%, ${0.02 * pulse})`;
        ctx.fill();

        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -20) orb.x = canvas.width + 20;
        if (orb.x > canvas.width + 20) orb.x = -20;
        if (orb.y < -20) orb.y = canvas.height + 20;
        if (orb.y > canvas.height + 20) orb.y = -20;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
};
