import { useEffect, useState, useRef } from "react";

export const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      idRef.current++;
      setTrail((prev) => [
        ...prev.slice(-5),
        { x: e.clientX, y: e.clientY, id: idRef.current },
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute h-[600px] w-[600px] rounded-full opacity-15 blur-[120px] transition-all duration-1000 ease-out"
        style={{
          background: "var(--gradient-primary)",
          left: `${position.x - 300}px`,
          top: `${position.y - 300}px`,
        }}
      />
      <div
        className="absolute h-[300px] w-[300px] rounded-full opacity-10 blur-[80px] transition-all duration-500 ease-out"
        style={{
          background: `radial-gradient(circle, hsl(200 90% 55% / 0.4), transparent)`,
          left: `${position.x - 150}px`,
          top: `${position.y - 150}px`,
        }}
      />
      {trail.map((point, i) => (
        <div
          key={point.id}
          className="absolute h-1 w-1 rounded-full bg-primary"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (i + 1) * 0.06,
            transform: `scale(${(i + 1) * 0.4})`,
            transition: "all 0.3s ease-out",
          }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(hsl(175 85% 50% / 0.2) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(175 85% 50% / 0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};
