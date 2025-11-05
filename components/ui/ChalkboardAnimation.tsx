import React, { useRef, useEffect } from 'react';

const random = (min: number, max: number): number => Math.random() * (max - min) + min;

// Type for a drawable animation object
interface Drawable {
  x: number;
  y: number;
  life: number;
  maxLife: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  isDead: () => boolean;
}

// Base class for animations
class AnimationObject implements Drawable {
  x: number;
  y: number;
  life: number;
  maxLife: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = random(canvasWidth * 0.1, canvasWidth * 0.9);
    this.y = random(canvasHeight * 0.1, canvasHeight * 0.9);
    this.maxLife = random(200, 400);
    this.life = this.maxLife;
  }

  update() {
    this.life -= 1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // This method should be overridden
  }

  isDead() {
    return this.life <= 0;
  }

  getOpacity() {
    if (this.life > this.maxLife - 60) {
      return (this.maxLife - this.life) / 60; // Fade in
    }
    if (this.life < 60) {
      return this.life / 60; // Fade out
    }
    return 1;
  }
}

// Atom Animation
class Atom extends AnimationObject {
  draw(ctx: CanvasRenderingContext2D) {
    const opacity = this.getOpacity() * 0.5;
    ctx.strokeStyle = `rgba(217, 163, 84, ${opacity})`;
    ctx.lineWidth = 1;

    // Nucleus
    ctx.beginPath();
    ctx.arc(this.x, this.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(217, 163, 84, ${opacity})`;
    ctx.fill();

    // Orbits
    const t = this.life * 0.05;
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 30, 10, Math.PI / 4 + t, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(this.x, this.y, 30, 10, -Math.PI / 4 - t, 0, Math.PI * 2);
    ctx.stroke();
  }
}

// Formula Animation
class Formula extends AnimationObject {
    formula: string;
    constructor(canvasWidth: number, canvasHeight: number) {
        super(canvasWidth, canvasHeight);
        const formulas = ["E = mc²", "F = ma", "H₂O"];
        this.formula = formulas[Math.floor(Math.random() * formulas.length)];
    }
    
    draw(ctx: CanvasRenderingContext2D) {
        const opacity = this.getOpacity() * 0.6;
        ctx.fillStyle = `rgba(217, 163, 84, ${opacity})`;
        ctx.font = '16px "Source Serif 4"';
        ctx.textAlign = 'center';
        ctx.fillText(this.formula, this.x, this.y);
    }
}

const ChalkboardAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let animations: Drawable[] = [];
    const maxAnimations = 8;
    
    const animationTypes = [Atom, Formula];

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (animations.length < maxAnimations && Math.random() < 0.02) {
          const AnimationClass = animationTypes[Math.floor(Math.random() * animationTypes.length)];
          animations.push(new AnimationClass(canvas.width, canvas.height));
      }
      
      animations.forEach(anim => {
        anim.update();
        anim.draw(ctx);
      });
      
      animations = animations.filter(anim => !anim.isDead());

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    const parentEl = canvas.parentElement;
    const observer = new ResizeObserver(resizeCanvas);
    if(parentEl) {
        observer.observe(parentEl);
    }
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      if(parentEl) {
        observer.unobserve(parentEl);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default ChalkboardAnimation;