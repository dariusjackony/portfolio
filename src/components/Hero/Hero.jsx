import "./Hero.css";
import { useEffect } from "react";

export default function Hero() {

  useEffect(() => {
    initNightSky();
  }, []);

  function initNightSky() {
    const canvas = document.getElementById("stars-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resizeCanvas();

    const STAR_COUNT = window.innerWidth < 768 ? 60 : 140;
    const stars = [];

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.75,
        r: Math.random() * 1.6 + 0.3,
        twinkle: Math.random() * 0.02,
        alpha: Math.random(),
      });
    }

    let shootingStar = null;

    function drawMoon() {
  ctx.beginPath();
  ctx.arc(120, 110, 22, 0, Math.PI * 2); 
  ctx.fillStyle = "rgba(187, 185, 185, 0.64)"; 
  ctx.shadowColor = "rgba(200,200,200,0.25)";
  ctx.shadowBlur = 12; 
  ctx.fill();
  ctx.shadowBlur = 0;
}


    function drawVillage() {
      const h = canvas.height;

      ctx.fillStyle = "#020617";

      
      ctx.beginPath();
      ctx.moveTo(0, h - 140);
      ctx.quadraticCurveTo(200, h - 200, 400, h - 140);
      ctx.quadraticCurveTo(700, h - 80, canvas.width, h - 130);
      ctx.lineTo(canvas.width, h);
      ctx.lineTo(0, h);
      ctx.fill();

      
      ctx.fillStyle = "#01030f";
      for (let i = 0; i < 10; i++) {
        const x = i * 120 + 40;
        ctx.fillRect(x, h - 170, 60, 30);

        
        ctx.fillStyle = "rgba(66, 58, 39, 0.6)";
        ctx.fillRect(x + 15, h - 160, 10, 10);
        ctx.fillStyle = "#01030f";
      }
    }

    function drawStars() {
      stars.forEach((s) => {
        s.alpha += s.twinkle;
        if (s.alpha > 1 || s.alpha < 0.3) s.twinkle *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.fill();
      });
    }

    function drawShootingStar() {
      if (!shootingStar && Math.random() < 0.003) {
        shootingStar = {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.4,
          dx: 8,
          dy: 4,
          life: 0,
        };
      }

      if (shootingStar) {
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - 60, shootingStar.y - 20);
        ctx.strokeStyle = "rgba(255,255,255,0.9)";
        ctx.lineWidth = 2;
        ctx.stroke();

        shootingStar.x += shootingStar.dx;
        shootingStar.y += shootingStar.dy;
        shootingStar.life++;

        if (shootingStar.life > 18) shootingStar = null;
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawStars();
      drawMoon();
      drawShootingStar();
      drawVillage();

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", resizeCanvas);
  }

  return (
    <section className="hero-main-container">
      <canvas id="stars-canvas"></canvas>

      <div className="hero-content">
        <p className="hero-title">
          Building modern, responsive web experiences
        </p>
        <button className="hero-btn">Browse Projects</button>
      </div>
    </section>
  );
}
