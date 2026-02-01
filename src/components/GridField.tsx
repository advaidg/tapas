"use client";

import { useEffect, useRef, useCallback } from "react";

export default function GridField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef(0);
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    }

    ctx.clearRect(0, 0, w, h);
    timeRef.current += 0.005;

    const spacing = 60;
    const scrollFactor = scrollRef.current * 0.03;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;

    // Dot grid
    for (let x = spacing; x < w; x += spacing) {
      for (let y = spacing; y < h; y += spacing) {
        const distToMouse = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
        const aura = Math.max(0, 1 - distToMouse / 300);

        const dx =
          Math.sin(scrollFactor + y * 0.008 + timeRef.current) * aura * 4;
        const dy =
          Math.cos(scrollFactor + x * 0.008 + timeRef.current) * aura * 4;

        const size = 1 + aura * 2.5;
        const alpha = 0.08 + aura * 0.6;

        if (aura > 0.3) {
          ctx.fillStyle = `rgba(200, 255, 0, ${alpha * 0.7})`;
        } else {
          ctx.fillStyle = `rgba(240, 240, 245, ${alpha * 0.3})`;
        }

        ctx.beginPath();
        ctx.arc(x + dx, y + dy, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Connection lines near cursor
    if (mx > 0 && my > 0) {
      const nearDots: [number, number][] = [];
      for (let x = spacing; x < w; x += spacing) {
        for (let y = spacing; y < h; y += spacing) {
          const dist = Math.sqrt((x - mx) ** 2 + (y - my) ** 2);
          if (dist < 180) nearDots.push([x, y]);
        }
      }

      ctx.strokeStyle = "rgba(200, 255, 0, 0.06)";
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nearDots.length; i++) {
        for (let j = i + 1; j < nearDots.length; j++) {
          const d = Math.sqrt(
            (nearDots[i][0] - nearDots[j][0]) ** 2 +
              (nearDots[i][1] - nearDots[j][1]) ** 2
          );
          if (d < spacing * 1.5) {
            ctx.beginPath();
            ctx.moveTo(nearDots[i][0], nearDots[i][1]);
            ctx.lineTo(nearDots[j][0], nearDots[j][1]);
            ctx.stroke();
          }
        }
      }

      const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 250);
      gradient.addColorStop(0, "rgba(200, 255, 0, 0.04)");
      gradient.addColorStop(0.5, "rgba(200, 255, 0, 0.01)");
      gradient.addColorStop(1, "rgba(200, 255, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);
    }

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animRef.current);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
