const rabbit = document.querySelector(".rabbit");
const unicorn = document.querySelector(".unicorn");

// Rabbit blink effect (subtle life)
setInterval(() => {
  rabbit.style.transform = "scaleY(0.1)";
  setTimeout(() => {
    rabbit.style.transform = "scaleY(1)";
  }, 180);
}, 4000);

// Unicorn sparkle trail
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.style.position = "fixed";
  sparkle.style.width = "6px";
  sparkle.style.height = "6px";
  sparkle.style.borderRadius = "50%";
  sparkle.style.background = "white";
  sparkle.style.opacity = 0.8;
  sparkle.style.left = unicorn.getBoundingClientRect().left + "px";
  sparkle.style.top = unicorn.getBoundingClientRect().top + "px";
  sparkle.style.zIndex = 1;
  sparkle.style.boxShadow = "0 0 12px rgba(255,255,255,0.8)";

  document.body.appendChild(sparkle);

  sparkle.animate([
    { transform: "scale(1)", opacity: 0.8 },
    { transform: "scale(0)", opacity: 0 }
  ], {
    duration: 1200,
    easing: "ease-out"
  });

  setTimeout(() => sparkle.remove(), 1200);
}

// Sparkles follow unicorn occasionally
setInterval(() => {
  if (Math.random() > 0.6) {
    createSparkle();
  }
}, 300);

// 🎉 MIDNIGHT CREATURE BOOST
window.magicCreatures = function () {
  rabbit.style.filter = "drop-shadow(0 0 30px gold)";
  unicorn.style.filter = "drop-shadow(0 0 40px cyan)";
};
