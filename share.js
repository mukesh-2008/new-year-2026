const shareBtn = document.getElementById("shareBtn");

shareBtn.addEventListener("click", async () => {
  const shareData = {
    title: "✨ Welcome 2026 ✨",
    text: "🎆 Step into a magical dream universe for New Year 2026 🌌✨\nCreated with love by Mukesh 💫",
    url: window.location.href
  };

  // 📱 Mobile Native Share
  if (navigator.share) {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.log("Share cancelled");
    }
  } 
  // 💻 Desktop Fallback
  else {
    try {
      await navigator.clipboard.writeText(shareData.url);
      shareBtn.innerText = "✅ Link copied!";
      setTimeout(() => {
        shareBtn.innerText = "🚀 Share this magic";
      }, 2000);
    } catch (err) {
      alert("Copy failed. Please copy manually.");
    }
  }
});
