/**
 * Interactive Background Data Canvas
 * Draws floating data points and subtle connecting network graphs in royal blue tones.
 * Includes mouse proximity interactions and respects prefers-reduced-motion accessibility setting.
 */

export function initDataCanvas() {
  const canvas = document.getElementById('data-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    canvas.style.display = 'none';
    return;
  }

  let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

  const points = [];
  const pointCount = Math.min(Math.floor((width * height) / 18000), 45);

  const mouse = {
    x: -1000,
    y: -1000,
    radius: 120
  };

  class DataPoint {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.radius = Math.random() * 1.8 + 1;
      this.baseAlpha = Math.random() * 0.4 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(59, 130, 246, ${this.baseAlpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < pointCount; i++) {
    points.push(new DataPoint());
  }

  function connectPoints() {
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dx = points[i].x - points[j].x;
        const dy = points[i].y - points[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          const alpha = (1 - dist / 130) * 0.2;
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    points.forEach((p) => {
      p.update();
      p.draw();
    });

    connectPoints();
    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
    height = canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
}
