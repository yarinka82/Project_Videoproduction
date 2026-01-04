const EFFECT_COLOR = {
  r: 230,
  g: 193,
  b: 70,
};

function getColor(alpha) {
  return (
    "rgba(" +
    EFFECT_COLOR.r +
    ", " +
    EFFECT_COLOR.g +
    ", " +
    EFFECT_COLOR.b +
    ", " +
    alpha +
    ")"
  );
}

const icons = [
  { id: "iconTop", name: "icon-instagram" },
  { id: "iconLeft", name: "icon-facebook" },
  { id: "iconRight", name: "icon-tik-tok" },
];

export async function loadSvgSafely() {
  const { socialContainer } = await getDomRefs();
  socialContainer.innerHTML = `
    <li class="social-icon" id="iconTop">
    <a href="https://www.youtube.com/@Xoramedia" class="icon-link" target="_blank" rel="noopener noreferrer" >
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" >
  <defs>
    <linearGradient id="ytGradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FF3D00"/>
      <stop offset="100%" stop-color="#C60000"/>
    </linearGradient>
  </defs>
  <circle cx="20" cy="20" r="19" fill="url(#ytGradient)" />
  <path d="M16 13l11 7-11 7V13z" fill="#FFFFFF" />
</svg>
</a>
    </li>
    <li class="social-icon" id="iconLeft">
    <a class="icon-link" href="https://www.instagram.com/xora_media/" target="_blank" rel="noopener noreferrer">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" >
  <radialGradient id="a" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#fd5"/>
    <stop offset=".328" stop-color="#ff543f"/>
    <stop offset=".348" stop-color="#fc5245"/>
    <stop offset=".504" stop-color="#e64771"/>
    <stop offset=".643" stop-color="#d53e91"/>
    <stop offset=".761" stop-color="#cc39a4"/>
    <stop offset=".841" stop-color="#c837ab"/>
  </radialGradient>
  <path fill="url(#a)" d="M34.02 4H13.98A9.97 9.97 0 0 0 4 13.98v20.04A9.97 9.97 0 0 0 13.98 44h20.04A9.97 9.97 0 0 0 44 34.02V13.98A9.97 9.97 0 0 0 34.02 4z"/>
  <radialGradient id="b" cx="11.786" cy="5.54" r="29.813" gradientUnits="userSpaceOnUse">
    <stop offset="0" stop-color="#4168c9"/>
    <stop offset=".999" stop-color="#4168c9" stop-opacity="0"/>
  </radialGradient>
  <path fill="url(#b)" d="M34.02 4H13.98A9.97 9.97 0 0 0 4 13.98v20.04A9.97 9.97 0 0 0 13.98 44h20.04A9.97 9.97 0 0 0 44 34.02V13.98A9.97 9.97 0 0 0 34.02 4z"/>
  <path fill="#fff" d="M24 15.5A8.5 8.5 0 1 0 32.5 24 8.51 8.51 0 0 0 24 15.5zm0 14A5.5 5.5 0 1 1 29.5 24 5.51 5.51 0 0 1 24 29.5zM33.5 14.5A2.5 2.5 0 1 0 36 17a2.5 2.5 0 0 0-2.5-2.5zM31 9H17a8 8 0 0 0-8 8v14a8 8 0 0 0 8 8h14a8 8 0 0 0 8-8V17a8 8 0 0 0-8-8zM37 31a6 6 0 0 1-6 6H17a6 6 0 0 1-6-6V17a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6z"/>
</svg>

    </a>
     </li>
     <li class="social-icon" id="iconRight">
      <a class="icon-link" href="https://www.linkedin.com/in/dmytro-zhulyk-716545365" target="_blank" rel="noopener noreferrer">
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
          role="img"
          aria-label="LinkedIn">
         <title>LinkedIn</title>
         <circle cx="12" cy="12" r="12" fill="#0A66C2"/>
         <path
         fill="#ffffff"
         d="M7.051 17.999H4.5V9h2.551v8.999zM5.776 7.5a1.276 1.276 0 1 1 0-2.552 1.276 1.276 0 0 1 0 2.552zM19.5 18h-2.55v-4.357c0-1.04-.02-2.377-1.448-2.377-1.45 0-1.672 1.132-1.672 2.3V18h-2.55V9h2.448v1.229h.035c.341-.646 1.174-1.326 2.417-1.326 2.583 0 3.05 1.7 3.05 3.91V18z"
        />
     </svg>
    </a>
    </li> 
  `;

  initAnimation();
}

function getDomRefs() {
  return new Promise((resolve) => {
    function checkCanvas() {
      const canvas = document.getElementById("beamsCanvas");
      const section = document.querySelector(".xora-prezentationps");
      const socialContainer = document.getElementById("socialContainer");

      if (
        canvas === null ||
        canvas === undefined ||
        section === null ||
        socialContainer === null
      ) {
        setTimeout(checkCanvas, 100);
      } else {
        const ctx = canvas.getContext("2d");
        const videoContainers = ["videoLeft", "videoCenter", "videoRight"];
        const icons = ["iconTop", "iconLeft", "iconRight"];
        resolve({
          canvas,
          ctx,
          videoContainers,
          socialContainer,
          icons,
          section,
        });
      }
    }
    checkCanvas();
  });
}

let animationId = null;
let isAnimationInitialized = false;

export async function initAnimation() {
  if (isAnimationInitialized) {
    cleanup();
  }

  const { canvas, ctx, videoContainers, socialContainer, icons, section } =
    await getDomRefs();

  let currentVideoIndex = 0;
  let iconAngles = [270, 150, 30];
  const radiusOuter = 110;
  let beams = [];
  let wave = null;
  let animationPhase = "idle";
  let phaseStartTime = 0;
  let isPaused = false;

  canvas.width = section.offsetWidth;
  canvas.height = section.offsetHeight;

  function updateLayout() {
    canvas.width = section.offsetWidth;
    canvas.height = section.offsetHeight;
    positionIcons();
    updateWavePosition();
  }

  function updateWavePosition() {
    const socialRect = socialContainer.getBoundingClientRect();
    const centerX = socialRect.left + socialRect.width / 2;
    const centerY = socialRect.top + socialRect.height / 2;

    if (wave) {
      wave.style.left = centerX + "px";
      wave.style.top = centerY + "px";
    }
  }

  window.addEventListener("resize", updateLayout);
  window.addEventListener("scroll", updateLayout);

  document
    .getElementById("socialContainer")
    .addEventListener("mouseenter", function () {
      isPaused = true;
    });

  document
    .getElementById("socialContainer")
    .addEventListener("mouseleave", function () {
      isPaused = false;
    });

  const videos = document.querySelectorAll(".xmpr-video");

  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => {
      if (video.readyState >= 2) video.play().catch(() => {});
      isPaused = true;
    });

    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0;
      isPaused = false;
    });
  });

  function positionIcons() {
    // const container = document.getElementById('socialContainer');
    const centerX = socialContainer.offsetWidth / 2;
    const centerY = socialContainer.offsetHeight / 2;

    for (let i = 0; i < icons.length; i++) {
      const icon = document.getElementById(icons[i]);
      let angle = iconAngles[i] * (Math.PI / 180);
      const x = centerX + radiusOuter * Math.cos(angle);
      const y = centerY + radiusOuter * Math.sin(angle);

      icon.style.left = x + "px";
      icon.style.top = y + "px";
      icon.style.transform = "translate(-50%, -50%)";
    }
  }

  function moveIconsToCenter(progress) {
    const centerX = socialContainer.offsetWidth / 2;
    const centerY = socialContainer.offsetHeight / 2;

    for (let i = 0; i < icons.length; i++) {
      const icon = document.getElementById(icons[i]);
      let angle = iconAngles[i] * (Math.PI / 180);
      const minRadius = 0;
      const currentRadius = radiusOuter - (radiusOuter - minRadius) * progress;

      const x = centerX + currentRadius * Math.cos(angle);
      const y = centerY + currentRadius * Math.sin(angle);

      icon.style.left = x + "px";
      icon.style.top = y + "px";
    }
  }

  function createBeam(fromVideo, targetPosition) {
    const videoItem = document.getElementById(fromVideo);
    const videoRect = videoItem.getBoundingClientRect();

    const h4 = videoItem.querySelector(".xmpr-titl-h4");
    const h4Rect = h4 ? h4.getBoundingClientRect() : videoRect;

    const sectionRect = section.getBoundingClientRect();
    const socialRect = socialContainer.getBoundingClientRect();

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1200;

    let startX, startY;

    if (isMobile) {
      const listContainer = document.querySelector(".xmpr-list");
      const listRect = listContainer.getBoundingClientRect();

      const partWidth = listRect.width / 3;

      let partIndex;
      if (fromVideo === "videoLeft") partIndex = 0;
      else if (fromVideo === "videoCenter") partIndex = 1;
      else partIndex = 2;

      startX =
        listRect.left +
        partIndex * partWidth +
        partWidth / 2 -
        sectionRect.left;
      startY = listRect.bottom + 60 - sectionRect.top;
    } else if (isTablet) {
      startX = videoRect.left + videoRect.width / 2 - sectionRect.left;
      startY =
        (h4 ? h4Rect.bottom + 20 : videoRect.bottom + 65) - sectionRect.top;
    } else {
      startX = videoRect.left + videoRect.width / 2 - sectionRect.left;
      startY =
        (h4 ? h4Rect.bottom + 20 : videoRect.bottom + 50) - sectionRect.top;
    }

    const centerX = socialRect.left + socialRect.width / 2 - sectionRect.left;
    const centerY = socialRect.top + socialRect.height / 2 - sectionRect.top;

    let targetAngle;
    if (targetPosition === "top") {
      targetAngle = 270;
    } else if (targetPosition === "left") {
      targetAngle = 160;
    } else {
      targetAngle = 30;
    }

    const rad = (targetAngle * Math.PI) / 180;

    const adjustedRadius = radiusOuter + 0;
    const endX = centerX + adjustedRadius * Math.cos(rad);
    const endY = centerY + adjustedRadius * Math.sin(rad);

    return {
      startPos: { x: startX, y: startY },
      endPos: { x: endX, y: endY },
      targetAngle: targetAngle,
      progress: 0,
      adjustedRadius: adjustedRadius,
    };
  }

  function drawBeam(beam) {
    const currentX =
      beam.startPos.x + (beam.endPos.x - beam.startPos.x) * beam.progress;
    const currentY =
      beam.startPos.y + (beam.endPos.y - beam.startPos.y) * beam.progress;

    const gradient = ctx.createLinearGradient(
      beam.startPos.x,
      beam.startPos.y,
      currentX,
      currentY
    );
    gradient.addColorStop(0, getColor(1));
    gradient.addColorStop(0.5, getColor(1));
    gradient.addColorStop(1, getColor(1));

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.shadowBlur = 25;
    ctx.shadowColor = getColor(1);
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(beam.startPos.x, beam.startPos.y);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
    ctx.shadowBlur = 20;

    ctx.strokeStyle = getColor(0.8);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(beam.startPos.x, beam.startPos.y);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();
  }

  function updateBeamEndpoints(scale) {
    const socialRect = socialContainer.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();

    const centerX = socialRect.left + socialRect.width / 2 - sectionRect.left;
    const centerY =
      socialRect.top + socialRect.height / 2 - sectionRect.top + 50;

    const baseRadius = radiusOuter + 0;
    const minRadius = 25;
    const currentRadius = minRadius + (baseRadius - minRadius + 40) * scale;

    for (let i = 0; i < beams.length; i++) {
      const rad = (beams[i].targetAngle * Math.PI) / 180;
      beams[i].endPos = {
        x: centerX + currentRadius * Math.cos(rad),
        y: centerY + currentRadius * Math.sin(rad),
      };
    }
  }

  function createExplosion(x, y, radius) {
    const sparkCount = 250;

    for (let i = 0; i < sparkCount; i++) {
      (function (idx) {
        const angle = (Math.PI * 2 * idx) / sparkCount;

        const startX = x + Math.cos(angle) * radius;
        const startY = y + Math.sin(angle) * radius;

        const spark = document.createElement("div");
        spark.className = "sparks";
        // spark.style.position = 'fixed';
        spark.style.left = startX + "px";
        spark.style.top = startY + "px";
        document.body.appendChild(spark);

        const velocity = 600 + Math.random() * 1000;
        const endX = x + Math.cos(angle) * (radius + velocity);
        const endY = y + Math.sin(angle) * (radius + velocity);
        const duration = 2 + Math.random() * 1.5;
        spark.style.opacity = "1";

        setTimeout(function () {
          spark.style.transition = "all " + duration + "s ease-out";
          spark.style.left = endX + "px";
          spark.style.top = endY + "px";
          // spark.style.opacity = '0';
          spark.style.transform = "scale(0.05)";
        }, 5);

        setTimeout(function () {
          spark.remove();
        }, duration * 1000 + 100);
      })(i);
    }
  }

  function createReverseWave(startX, startY, callback) {
    const videosRow = document.getElementById("videosRow");
    const rowRect = videosRow.getBoundingClientRect();

    const waveEl = document.createElement("div");
    waveEl.className = "reverse-wave";
    waveEl.style.position = "fixed";
    waveEl.style.left = startX + "px";
    waveEl.style.top = startY + "px";
    waveEl.style.width = "130px";
    waveEl.style.height = "130px";
    waveEl.style.transform = "translate(-50%, -50%) rotate(0deg)";
    waveEl.style.zIndex = "50";
    section.appendChild(waveEl);

    waveEl.style.opacity = "1";
    waveEl.style.transition = "all 1.2s ease-out";

    const distance = Math.abs(startY - rowRect.bottom);
    const targetSize = distance * 2 + 300;

    setTimeout(function () {
      waveEl.style.width = targetSize + "px";
      waveEl.style.height = targetSize + "px";
    }, 50);

    setTimeout(function () {
      for (let i = 0; i < videoContainers.length; i++) {
        document.getElementById(videoContainers[i]).classList.add("energized");
      }
    }, 800);

    setTimeout(function () {
      waveEl.style.opacity = "0";

      setTimeout(function () {
        for (let i = 0; i < videoContainers.length; i++) {
          document
            .getElementById(videoContainers[i])
            .classList.remove("energized");
        }
        waveEl.remove();
        if (callback) callback();
      }, 1500);
    }, 1200);
  }

  function animate(timestamp) {
    if (isPaused) {
      animationId = requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (animationPhase === "idle") {
      phaseStartTime = timestamp;
      animationPhase = "growing";

      beams = [
        createBeam("videoLeft", "left"),
        createBeam("videoCenter", "top"),
        createBeam("videoRight", "right"),
      ];

      if (wave) {
        wave.remove();
        wave = null;
      }
    } else if (animationPhase === "growing") {
      const elapsed = timestamp - phaseStartTime;
      const duration = 1000;
      const progress = Math.min(elapsed / duration, 1);

      for (let i = 0; i < beams.length; i++) {
        beams[i].progress = progress;
        drawBeam(beams[i]);
      }

      if (progress >= 1) {
        animationPhase = "compressing";
        phaseStartTime = timestamp;

        const socialRect = socialContainer.getBoundingClientRect();
        const centerX = socialRect.left + socialRect.width / 2;
        const centerY = socialRect.top + socialRect.height / 2;

        wave = document.createElement("div");
        wave.className = "energy-wave";
        wave.style.position = "fixed";
        wave.style.left = centerX + "px";
        wave.style.top = centerY + "px";
        wave.style.width = radiusOuter * 2 + "px";
        wave.style.height = radiusOuter * 2 + "px";
        wave.style.transform = "translate(-50%, -50%)";
        wave.style.opacity = "1";
        wave.style.transition = "none";
        wave.style.zIndex = "100";
        socialContainer.appendChild(wave);
      }
    } else if (animationPhase === "compressing") {
      const elapsed = timestamp - phaseStartTime;
      const duration = 1200;
      const progress = Math.min(elapsed / duration, 1);
      const scale = 1 - progress * 0.8;

      updateBeamEndpoints(scale);

      for (let i = 0; i < beams.length; i++) {
        beams[i].progress = 1;
        drawBeam(beams[i]);
      }

      moveIconsToCenter(progress);

      if (wave) {
        const minSize = 50;
        const maxSize = radiusOuter * 2 + 120;
        const waveSize = minSize + (maxSize - minSize) * scale;
        wave.style.transition = "none";
        wave.style.width = waveSize + "px";
        wave.style.height = waveSize + "px";
        wave.style.opacity = "1";
      }

      if (progress >= 1) {
        const socialRect = socialContainer.getBoundingClientRect();
        const centerX = socialRect.left + socialRect.width / 2;
        const centerY = socialRect.top + socialRect.height / 2;

        if (wave) {
          const waveRadius = 70;
          createExplosion(centerX, centerY, waveRadius);
          const duration = 200;
          wave.remove();
          wave = null;
        }

        beams = [];

        for (let i = 0; i < iconAngles.length; i++) {
          iconAngles[i] = (iconAngles[i] + 120) % 360;
        }

        createReverseWave(centerX, centerY, function () {
          currentVideoIndex = (currentVideoIndex + 1) % 3;
        });

        animationPhase = "exploding";
        phaseStartTime = timestamp + 500;
      }
    } else if (animationPhase === "exploding") {
      const elapsed = timestamp - phaseStartTime;
      if (elapsed < 0) {
        return requestAnimationFrame(animate);
      }
      const delay = 300;
      const duration = 1300;
      const progress = Math.min(elapsed / duration, 1);

      const centerX =
        document.getElementById("socialContainer").offsetWidth / 2;
      const centerY =
        document.getElementById("socialContainer").offsetHeight / 2;
      const minRadius = 30;
      const currentRadius = minRadius + (radiusOuter - minRadius) * progress;

      for (let i = 0; i < icons.length; i++) {
        const icon = document.getElementById(icons[i]);
        const angle = iconAngles[i] * (Math.PI / 180);

        const x = centerX + currentRadius * Math.cos(angle);
        const y = centerY + currentRadius * Math.sin(angle);

        icon.style.left = x + "px";
        icon.style.top = y + "px";
      }

      if (progress >= 1) {
        animationPhase = "waiting";
        phaseStartTime = timestamp;
      }
    } else if (animationPhase === "waiting") {
      const elapsed = timestamp - phaseStartTime;

      if (elapsed > 500) {
        animationPhase = "idle";
      }
    }

    animationId = requestAnimationFrame(animate);
  }
  function cleanup() {
    if (animationId) cancelAnimationFrame(animationId);
    animationId = null;

    window.removeEventListener("resize", updateLayout);
    window.removeEventListener("scroll", updateLayout);

    // Очищення соціального контейнера без втрати посилання
    socialContainer.innerHTML = socialContainer.innerHTML;

    // Скидання відео
    videos.forEach((video) => {
      const newVideo = video.cloneNode(true);
      video.replaceWith(newVideo);
    });

    if (wave) {
      wave.remove();
      wave = null;
    }

    beams.length = 0;
  }

  positionIcons();
  animationId = requestAnimationFrame(animate);

  return cleanup;
}
