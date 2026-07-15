import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;

    // Define particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = [];
    const particleCount = 60;

    // Colors: Deep Blues, Cyans, Purples, matching our Electric Blue (#00E5FF) and Purple Gradient (#7C3AED)
    const colors = [
      'rgba(0, 229, 255, ', // Electric Blue
      'rgba(124, 58, 237, ', // Purple
      'rgba(59, 130, 246, ', // Blue
    ];

    // Initialize particles
    const initParticles = () => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.5 + 0.2,
          pulseSpeed: Math.random() * 0.01 + 0.005,
        });
      }
    };

    // Resize handler with ResizeObserver
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        width = newWidth;
        height = newHeight;
        canvas.width = newWidth;
        canvas.height = newHeight;
        initParticles();
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Animation Loop
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw animated subtle grid background
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      
      // Vertical lines
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw Moving Glowing Circles in the background
      const time = Date.now() * 0.0005;
      const glowCircles = [
        { x: width * 0.25 + Math.sin(time * 0.7) * 100, y: height * 0.3 + Math.cos(time * 0.5) * 80, r: 250, color: 'rgba(0, 229, 255, 0.03)' },
        { x: width * 0.75 + Math.cos(time * 0.6) * 120, y: height * 0.7 + Math.sin(time * 0.4) * 100, r: 350, color: 'rgba(124, 58, 237, 0.04)' },
        { x: width * 0.5 + Math.sin(time * 0.5) * 80, y: height * 0.5 + Math.sin(time * 0.8) * 80, r: 200, color: 'rgba(59, 130, 246, 0.03)' },
      ];

      glowCircles.forEach(circle => {
        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.r);
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // 3. Draw and update particles
      particles.forEach((p, idx) => {
        // Update positions
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Update opacity/pulsing
        p.alpha += p.pulseSpeed;
        if (p.alpha > 0.85 || p.alpha < 0.15) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Draw particle
        ctx.fillStyle = `${p.color}${Math.max(0.1, p.alpha)})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // 4. Draw interactive constellation links
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            const linkAlpha = (1 - dist / 100) * 0.12 * Math.min(p.alpha, p2.alpha);
            ctx.strokeStyle = `rgba(0, 229, 255, ${linkAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    // Initial load
    initParticles();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
      <canvas ref={canvasRef} id="particles-canvas" className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
}
