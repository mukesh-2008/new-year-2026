const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

setInterval(() => {
  ctx.beginPath();
  ctx.arc(
    Math.random() * canvas.width,
    Math.random() * canvas.height / 2,
    6,
    0,
    Math.PI * 2
  );
  ctx.fillStyle = "yellow";
  ctx.fill();
}, 500);
