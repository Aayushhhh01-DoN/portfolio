import { useEffect, useState } from "react";

export const MouseFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="absolute h-[500px] w-[500px] rounded-full opacity-[0.07] blur-[100px] transition-all duration-[1200ms] ease-out"
        style={{
          background: "var(--gradient-primary)",
          left: `${position.x - 250}px`,
          top: `${position.y - 250}px`,
        }}
      />
    </div>
  );
};
