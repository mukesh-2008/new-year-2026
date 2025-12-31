 // COUNTDOWN TO 2026 IST
const targetDate = new Date("January 1, 2026 00:00:00 GMT+05:30").getTime();

let fireworksStarted = false;

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0 && !fireworksStarted) {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";

    startFireworks();
    fireworksStarted = true;
    return;
  }

  if (diff <= 0) return;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
}, 1000);

// MUSIC TOGGLE (UNCHANGED)
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let playing = false;

btn.onclick = () => {
  playing ? music.pause() : music.play();
  playing = !playing;
};

// 🎆 FIREWORKS LOGIC
function startFireworks() {
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let particles = [];

  function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;
    const colors = ["#FFD700", "#FF4C4C", "#4CFFB8", "#4CA6FF"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x,
        y,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 6 + 2,
        radius: 2,
        life: 100,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      p.x += Math.cos(p.angle) * p.speed;
      p.y += Math.sin(p.angle) * p.speed;
      p.life--;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
  }

  // Burst fireworks
  for (let i = 0; i < 6; i++) {
    setTimeout(createFirework, i * 400);
  }

  animate();

  // Stop after 6 seconds
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 6000);
}
