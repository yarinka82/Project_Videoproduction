import { renderVideos } from "./renderVideos.js";

export function animatePageTransition(videos, direction = "left") {
  const track = document.getElementById("videos");
  if (!track) return;

  const offset = direction === "left" ? "-100%" : "100%";
  track.style.transition = "transform 0.5s ease, opacity 0.5s ease";
  track.style.transform = `translateX(${offset})`;
  track.style.opacity = "0";

  track.addEventListener(
    "transitionend",
    () => {
      track.style.transition = "none";
      track.style.transform = "translateX(0)";
      track.style.opacity = "1";

      renderVideos(videos);
    },
    { once: true }
  );
}
