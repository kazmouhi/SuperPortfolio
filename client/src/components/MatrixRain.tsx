// components/MatrixRain.tsx
import { useEffect, useRef } from "react";

const chars ="アァカجثتبرذدخحضصشسزفغعظطنملكقيوهـأサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const font = 14;
    const cols = Math.floor(w / font);
    const drops = Array.from({ length: cols }, () => 1);

    let speed = 1; // will be updated by scroll
    const handleScroll = () => {
      speed = 1 + window.scrollY * 0.01; // faster as we scroll
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const draw = () => {
      ctx.fillStyle = "rgba(255, 255, 255, .05)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#0F0";
      ctx.font = font + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * font, drops[i] * font);
        if (drops[i] * font > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += speed;
      }
    };

    const id = setInterval(draw, 35);
    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      clearInterval(id);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
}
