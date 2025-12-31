const timerEl = document.getElementById("timer");
const music = document.getElementById("bgMusic");

// 🎯 Target: Jan 1, 2026 — IST
const targetDate = new Date("2026-01-01T00:00:00+05:30").getTime();

let triggered = false;

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0 && !triggered) {
    triggered = true;

    // 🎆 BOOST EVERYTHING
    if (window.boostFireworks) boostFireworks();
    if (window.magicCreatures) magicCreatures();

    // 🎵 Play music
    music.volume = 0.8;
    music.play().catch(() => {});

    timerEl.innerHTML = "🎉 HAPPY NEW YEAR 2026 🎉";
    timerEl.style.fontSize = "clamp(28px, 6vw, 60px)";
    return;
  }

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerEl.innerHTML =
    `${String(days).padStart(2, "0")} : ` +
    `${String(hours).padStart(2, "0")} : ` +
    `${String(minutes).padStart(2, "0")} : ` +
    `${String(seconds).padStart(2, "0")}`;
}

// Start loop
setInterval(updateCountdown, 1000);
updateCountdown();
