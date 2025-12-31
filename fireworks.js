const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

let fireworks = [];
let particles = [];
let intensity = 1; // increases at midnight

class Firework {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.targetY = Math.random() * canvas.height * 0.4;
    this.speed = Math.random() * 3 + 4;
    this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
    this.exploded = false;
  }

  update() {
    this.y -= this.speed;
    if (this.y <= this.targetY && !this.exploded) {
      this.explode();
      this.exploded = true;
    }
  }

  explode() {
    const count = 40 * intensity;
    for (let i = 0; i < count; i++) {
      particles.push(new Particle(this.x, this.y, this.color));
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedX = (Math.random() - 0.5) * 6;
    this.speedY = (Math.random() - 0.5) * 6;
    this.life = 80;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += 0.04;
    this.life--;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

// Ambient fireworks loop
setInterval(() => {
  if (document.visibilityState === "visible") {
    fireworks.push(new Firework());
  }
}, 1200);

// Main animation loop
function animate() {
  
ctx.fillStyle = "rgba(0,0,0,0.2)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach((fw, i) => {
    fw.update();
    fw.draw();
    if (fw.exploded) fireworks.splice(i, 1);
  });

  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.life <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}
animate();

// 🎉 MIDNIGHT BOOST FUNCTION
window.boostFireworks = function () {
  intensity = 3;
  for (let i = 0; i < 12; i++) {
    fireworks.push(new Firework());
  }
};
