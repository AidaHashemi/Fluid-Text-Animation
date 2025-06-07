// Create floating particles
function createFloatingElements() {
  const container = document.querySelector(".floating-elements");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "floating-element";

    // Random positioning
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 15 + "s";
    particle.style.animationDuration = 15 + Math.random() * 10 + "s";

    // Random size variation
    const size = 2 + Math.random() * 4;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    container.appendChild(particle);
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", createFloatingElements);

// Add mouse interaction
document.addEventListener("mousemove", (e) => {
  const textFill = document.querySelector(".text-fill");
  const rect = textFill.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  textFill.style.filter = `drop-shadow(${x * 10 - 5}px ${
    y * 10 - 5
  }px 30px rgba(120, 219, 255, 0.8))`;
});
