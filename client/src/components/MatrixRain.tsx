// components/MatrixRain.tsx
import { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme-provider";

const chars =
  "ア1ァ1カ1サ1タ1ナ1ハ1マ1ヤ1ャ1ラ1ワ0ガ0ザ0ダ0バ0パ0イ0ィ0キ0シ0チ0ニ1ヒ1ミ1リ1ヰ1ギ1ジ1ヂ1ビ0ピ0ウ0ゥ0ク1ス1ツ1ヌ1フ1ム0ユ0ュ0ル0グ1ズ1ブ1プ1エ1ェ0ケ0セ0テ0ネ1ヘ1メ1レ1ヱ0ゲ0ゼ0デ0ベ1ペ1オ1ォ1コ1ソ1ト1ノ1ホ1モ1ヨ0ョ0ロ0ヲ0ゴ0ゾ1ド1ボ1ポ1ヴ0ッ0ン000102131456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const font = 14;
    const cols = Math.floor(w / font);
    const drops = Array.from({ length: cols }, () => 1);

    let speed = 1;
    const handleScroll = () => (speed = 1 + window.scrollY * 0.01);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    let frameId: number;
    const draw = () => {
      // theme-aware background wipe
      ctx.fillStyle =
        theme === "dark" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, w, h);

      // theme-aware text colour
      ctx.fillStyle = theme === "dark" ? "#0F0" : "#3B82F6"; // green vs indigo
      ctx.font = `${font}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * font, drops[i] * font);
        if (drops[i] * font > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += speed;
      }
      frameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resize);
    };
  }, [theme]); // re-run when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden
    />
  );
}
