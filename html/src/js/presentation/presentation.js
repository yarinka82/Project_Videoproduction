const EFFECT_COLOR = {
  r: 230,
  g: 193,
  b: 70,
};

function getColor(alpha) {
  return (
    'rgba(' +
    EFFECT_COLOR.r +
    ', ' +
    EFFECT_COLOR.g +
    ', ' +
    EFFECT_COLOR.b +
    ', ' +
    alpha +
    ')'
  );
}

const icons = [
  { id: 'iconTop', name: 'icon-instagram' },
  { id: 'iconLeft', name: 'icon-facebook' },
  { id: 'iconRight', name: 'icon-tik-tok' },
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
    <a class="icon-link">
      <svg id="tik-tok" xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
      viewBox="0 0 256 256" xml:space="preserve">
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path d="M 45 90 L 45 90 C 20.147 90 0 69.853 0 45 v 0 C 0 20.147 20.147 0 45 0 h 0 c 24.853 0 45 20.147 45 45 v 0 C 90 69.853 69.853 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
	<path d="M 10.788 10.677 v -0.511 c -0.177 -0.025 -0.356 -0.038 -0.535 -0.039 c -2.189 0 -3.97 1.781 -3.97 3.97 c 0 1.343 0.671 2.531 1.695 3.25 c -0.685 -0.733 -1.067 -1.699 -1.066 -2.703 C 6.913 12.487 8.643 10.727 10.788 10.677" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,242,234); fill-rule: nonzero; opacity: 1;" transform=" matrix(3.89 0 0 3.89 -1.9444444444444287 -1.9444444444444287) " stroke-linecap="round"/>
	<path d="M 10.882 16.457 c 0.977 0 1.773 -0.777 1.81 -1.745 l 0.003 -8.643 h 1.579 c -0.034 -0.181 -0.051 -0.364 -0.051 -0.547 h -2.157 l -0.004 8.643 c -0.036 0.968 -0.833 1.745 -1.809 1.745 c -0.293 0 -0.582 -0.071 -0.841 -0.208 C 9.752 16.176 10.299 16.457 10.882 16.457 M 17.223 9.003 v -0.48 c -0.58 0.001 -1.148 -0.168 -1.634 -0.486 C 16.015 8.527 16.589 8.866 17.223 9.003" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,242,234); fill-rule: nonzero; opacity: 1;" transform=" matrix(3.89 0 0 3.89 -1.9444444444444287 -1.9444444444444287) " stroke-linecap="round"/>
	<path d="M 15.59 8.037 c -0.476 -0.545 -0.738 -1.244 -0.738 -1.967 h -0.578 C 14.425 6.878 14.9 7.588 15.59 8.037 M 10.253 12.284 c -1.001 0.001 -1.812 0.812 -1.813 1.813 c 0.001 0.674 0.375 1.292 0.972 1.605 c -0.223 -0.308 -0.343 -0.677 -0.343 -1.057 c 0.001 -1.001 0.812 -1.812 1.813 -1.813 c 0.187 0 0.366 0.031 0.535 0.084 v -2.202 c -0.177 -0.025 -0.356 -0.038 -0.535 -0.039 c -0.031 0 -0.062 0.002 -0.094 0.002 v 1.691 C 10.615 12.313 10.435 12.285 10.253 12.284" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,0,79); fill-rule: nonzero; opacity: 1;" transform=" matrix(3.89 0 0 3.89 -1.9444444444444287 -1.9444444444444287) " stroke-linecap="round"/>
	<path d="M 17.223 9.003 v 1.676 c -1.118 0 -2.154 -0.358 -3 -0.965 v 4.383 c 0 2.189 -1.78 3.97 -3.969 3.97 c -0.846 0 -1.63 -0.267 -2.275 -0.72 c 0.749 0.808 1.801 1.267 2.903 1.267 c 2.189 0 3.97 -1.781 3.97 -3.969 v -4.383 c 0.874 0.629 1.924 0.966 3 0.965 V 9.07 C 17.636 9.07 17.426 9.046 17.223 9.003" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,0,79); fill-rule: nonzero; opacity: 1;" transform=" matrix(3.89 0 0 3.89 -1.9444444444444287 -1.9444444444444287) " stroke-linecap="round"/>
	<path d="M 14.223 14.097 V 9.714 c 0.874 0.629 1.924 0.966 3 0.965 V 9.003 c -0.635 -0.137 -1.208 -0.476 -1.634 -0.966 C 14.9 7.588 14.425 6.878 14.274 6.07 h -1.579 l -0.003 8.643 c -0.036 0.968 -0.833 1.745 -1.81 1.745 c -0.583 -0.001 -1.13 -0.282 -1.469 -0.756 c -0.597 -0.313 -0.971 -0.931 -0.972 -1.605 c 0.001 -1.001 0.812 -1.812 1.813 -1.813 c 0.186 0 0.366 0.031 0.535 0.084 v -1.691 c -2.146 0.05 -3.876 1.81 -3.876 3.968 c 0 1.043 0.405 1.993 1.066 2.703 c 0.666 0.469 1.461 0.72 2.275 0.719 C 12.442 18.067 14.223 16.286 14.223 14.097" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" transform=" matrix(3.89 0 0 3.89 -1.9444444444444287 -1.9444444444444287) " stroke-linecap="round"/>
</g>
</svg>
</a>
    </li> 
  `;

  initAnimation();
}

function getDomRefs() {
  return new Promise((resolve) => {
    function checkCanvas() {
      const canvas = document.getElementById('beamsCanvas');
      const section = document.querySelector('.xora-prezentationps');
      const socialContainer = document.getElementById('socialContainer');

      if (
        canvas === null ||
        canvas === undefined ||
        section === null ||
        socialContainer === null
      ) {
        setTimeout(checkCanvas, 100);
      } else {
        const ctx = canvas.getContext('2d');
        const videoContainers = ['videoLeft', 'videoCenter', 'videoRight'];
        const icons = ['iconTop', 'iconLeft', 'iconRight'];
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

export async function initAnimation() {
  const { canvas, ctx, videoContainers, socialContainer, icons, section } =
    await getDomRefs();

  let currentVideoIndex = 0;
  let iconAngles = [270, 150, 30];
  const radiusOuter = 110;
  let beams = [];
  let wave = null;
  let animationPhase = 'idle';
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
      wave.style.left = centerX + 'px';
      wave.style.top = centerY + 'px';
    }
  }

  window.addEventListener('resize', updateLayout);
  window.addEventListener('scroll', updateLayout);

  document
    .getElementById('socialContainer')
    .addEventListener('mouseenter', function () {
      isPaused = true;
    });

  document
    .getElementById('socialContainer')
    .addEventListener('mouseleave', function () {
      isPaused = false;
    });

  const videos = document.querySelectorAll('.xmpr-video');

  videos.forEach((video) => {
    video.addEventListener('mouseenter', () => {
      video.play();
      isPaused = true;
    });

    video.addEventListener('mouseleave', () => {
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

      icon.style.left = x + 'px';
      icon.style.top = y + 'px';
      icon.style.transform = 'translate(-50%, -50%)';
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

      icon.style.left = x + 'px';
      icon.style.top = y + 'px';
    }
  }

  function createBeam(fromVideo, targetPosition) {
    const videoItem = document.getElementById(fromVideo);
    const videoRect = videoItem.getBoundingClientRect();

    const h4 = videoItem.querySelector('.xmpr-titl-h4');
    const h4Rect = h4 ? h4.getBoundingClientRect() : videoRect;

    const sectionRect = section.getBoundingClientRect();
    const socialRect = socialContainer.getBoundingClientRect();

    const isMobile = window.innerWidth < 1024;

    let startX, startY;

    if (isMobile) {
      const listContainer = document.querySelector('.xmpr-list');
      const listRect = listContainer.getBoundingClientRect();

      const partWidth = listRect.width / 3;

      let partIndex;
      if (fromVideo === 'videoLeft') partIndex = 0;
      else if (fromVideo === 'videoCenter') partIndex = 1;
      else partIndex = 2;

      startX =
        listRect.left +
        partIndex * partWidth +
        partWidth / 2 -
        sectionRect.left;
      startY = listRect.bottom + 60 - sectionRect.top;
    } else {
      startX = videoRect.left + videoRect.width / 2 - sectionRect.left;
      startY =
        (h4 ? h4Rect.bottom + 20 : videoRect.bottom + 50) - sectionRect.top;
    }

    const centerX = socialRect.left + socialRect.width / 2 - sectionRect.left;
    const centerY = socialRect.top + socialRect.height / 2 - sectionRect.top;

    let targetAngle;
    if (targetPosition === 'top') {
      targetAngle = 270;
    } else if (targetPosition === 'left') {
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
    ctx.lineCap = 'round';

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
      socialRect.top + socialRect.height / 2 - sectionRect.top + 35;

    const baseRadius = radiusOuter + 35;
    const minRadius = 25;
    const currentRadius = minRadius + (baseRadius - minRadius + 35) * scale;

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

        const spark = document.createElement('div');
        spark.className = 'sparks';
        // spark.style.position = 'fixed';
        spark.style.left = startX + 'px';
        spark.style.top = startY + 'px';
        document.body.appendChild(spark);

        const velocity = 600 + Math.random() * 1000;
        const endX = x + Math.cos(angle) * (radius + velocity);
        const endY = y + Math.sin(angle) * (radius + velocity);
        const duration = 2 + Math.random() * 1.5;
        spark.style.opacity = '1';

        setTimeout(function () {
          spark.style.transition = 'all ' + duration + 's ease-out';
          spark.style.left = endX + 'px';
          spark.style.top = endY + 'px';
          // spark.style.opacity = '0';
          spark.style.transform = 'scale(0.05)';
        }, 5);

        setTimeout(function () {
          spark.remove();
        }, duration * 1000 + 100);
      })(i);
    }
  }

  function createReverseWave(startX, startY, callback) {
    const videosRow = document.getElementById('videosRow');
    const rowRect = videosRow.getBoundingClientRect();

    const waveEl = document.createElement('div');
    waveEl.className = 'reverse-wave';
    waveEl.style.position = 'fixed';
    waveEl.style.left = startX + 'px';
    waveEl.style.top = startY + 'px';
    waveEl.style.width = '130px';
    waveEl.style.height = '130px';
    waveEl.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    waveEl.style.zIndex = '50';
    document.body.appendChild(waveEl);

    waveEl.style.opacity = '1';
    waveEl.style.transition = 'all 1.2s ease-out';

    const distance = Math.abs(startY - rowRect.bottom);
    const targetSize = distance * 2 + 300;

    setTimeout(function () {
      waveEl.style.width = targetSize + 'px';
      waveEl.style.height = targetSize + 'px';
    }, 50);

    setTimeout(function () {
      for (let i = 0; i < videoContainers.length; i++) {
        document.getElementById(videoContainers[i]).classList.add('energized');
      }
    }, 800);

    setTimeout(function () {
      waveEl.style.opacity = '0';

      setTimeout(function () {
        for (let i = 0; i < videoContainers.length; i++) {
          document
            .getElementById(videoContainers[i])
            .classList.remove('energized');
        }
        waveEl.remove();
        if (callback) callback();
      }, 1500);
    }, 1200);
  }

  function animate(timestamp) {
    if (isPaused) {
      return requestAnimationFrame(animate);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (animationPhase === 'idle') {
      phaseStartTime = timestamp;
      animationPhase = 'growing';

      beams = [
        createBeam('videoLeft', 'left'),
        createBeam('videoCenter', 'top'),
        createBeam('videoRight', 'right'),
      ];

      if (wave) {
        wave.remove();
        wave = null;
      }
    } else if (animationPhase === 'growing') {
      const elapsed = timestamp - phaseStartTime;
      const duration = 1000;
      const progress = Math.min(elapsed / duration, 1);

      for (let i = 0; i < beams.length; i++) {
        beams[i].progress = progress;
        drawBeam(beams[i]);
      }

      if (progress >= 1) {
        animationPhase = 'compressing';
        phaseStartTime = timestamp;

        const socialRect = socialContainer.getBoundingClientRect();
        const centerX = socialRect.left + socialRect.width / 2;
        const centerY = socialRect.top + socialRect.height / 2;

        wave = document.createElement('div');
        wave.className = 'energy-wave';
        wave.style.position = 'fixed';
        wave.style.left = centerX + 'px';
        wave.style.top = centerY + 'px';
        wave.style.width = radiusOuter * 2 + 'px';
        wave.style.height = radiusOuter * 2 + 'px';
        wave.style.transform = 'translate(-50%, -50%)';
        wave.style.opacity = '1';
        wave.style.transition = 'none';
        wave.style.zIndex = '5';
        document.body.appendChild(wave);
      }
    } else if (animationPhase === 'compressing') {
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
        wave.style.transition = 'none';
        wave.style.width = waveSize + 'px';
        wave.style.height = waveSize + 'px';
        wave.style.opacity = '1';
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

        animationPhase = 'exploding';
        phaseStartTime = timestamp + 500;
      }
    } else if (animationPhase === 'exploding') {
      const elapsed = timestamp - phaseStartTime;
      if (elapsed < 0) {
        return requestAnimationFrame(animate);
      }
      const delay = 300;
      const duration = 1300;
      const progress = Math.min(elapsed / duration, 1);

      const centerX =
        document.getElementById('socialContainer').offsetWidth / 2;
      const centerY =
        document.getElementById('socialContainer').offsetHeight / 2;
      const minRadius = 30;
      const currentRadius = minRadius + (radiusOuter - minRadius) * progress;

      for (let i = 0; i < icons.length; i++) {
        const icon = document.getElementById(icons[i]);
        const angle = iconAngles[i] * (Math.PI / 180);

        const x = centerX + currentRadius * Math.cos(angle);
        const y = centerY + currentRadius * Math.sin(angle);

        icon.style.left = x + 'px';
        icon.style.top = y + 'px';
      }

      if (progress >= 1) {
        animationPhase = 'waiting';
        phaseStartTime = timestamp;
      }
    } else if (animationPhase === 'waiting') {
      const elapsed = timestamp - phaseStartTime;

      if (elapsed > 500) {
        animationPhase = 'idle';
      }
    }

    requestAnimationFrame(animate);
  }

  positionIcons();
  requestAnimationFrame(animate);
}
