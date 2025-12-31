const balloonContainer = document.getElementById("balloons");

const colors = [
  "rgba(255,215,180,0.9)", // champagne
  "rgba(200,220,255,0.9)", // soft blue
  "rgba(230,230,230,0.9)", // silver
  "rgba(180,200,255,0.9)"  // sky glow
];

const BALLOON_COUNT = 14;

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.className = "balloon";

  const size = Math.random() * 30 + 50;
  balloon.style.width = size + "px";
  balloon.style.height = size * 1.2 + "px";

  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.top = "110vh";

  balloon.style.background = `radial-gradient(circle at 30% 30%, #fff, ${colors[Math.floor(Math.random()*colors.length)]})`;

  const floatDuration = Math.random() * 20 + 25;
  const drift = Math.random() * 40 - 20;

  balloon.animate([
    { transform: "translate(0,0) rotate(0deg)" },
    { transform: `translate(${drift}px, -130vh) rotate(${drift}deg)` }
  ], {
    duration: floatDuration * 1000,
    easing: "linear",
    fill: "forwards"
  });

  balloonContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, floatDuration * 1000);
}

// Loop balloons
setInterval(() => {
  if (document.visibilityState === "visible") {
    createBalloon();
  }
}, 1800);
