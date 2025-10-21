export function renderVideos(videos) {
  const videoList = document.getElementById('videos');
  videoList.innerHTML = '';

  if (videos.length === 0) {
    const emptyMessage = document.createElement('li');
    emptyMessage.className = 'video-empty';
    emptyMessage.textContent = 'Diese Kategorie wird aktuell befüllt.';
    videoList.appendChild(emptyMessage);
    return;
  }

  videos.map((video) => {
    const videoContainer = document.createElement('li');
    videoContainer.className = 'video-container';

    const wrapper = document.createElement('div');
    wrapper.classList = 'video-wrapper';
    videoContainer.appendChild(wrapper);

    const placeholder = document.createElement('div');
    placeholder.className = 'video-placeholder';

    const img = document.createElement('img');
    img.className = 'img-placeholder';
    img.src = video.preview
      ? video.preview
      : "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='480' height='270'><rect width='100%' height='100%' fill='%23222222'/></svg>";
    placeholder.appendChild(img);

    const loader = document.createElement('div');
    loader.className = 'video-loader';
    placeholder.appendChild(loader);

    const btnPlay = document.createElement('button');
    btnPlay.className = 'play-btn';
    btnPlay.textContent = '▶';
    placeholder.appendChild(btnPlay);

    const videoUrl = video.url.includes('youtube')
      ? `${video.url}&autoplay=1`
      : `${video.url}`;

    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;

    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.opacity = '0';

    const videoTitle = document.createElement('h3');
    videoTitle.className = 'video-title';
    videoTitle.textContent = `${video.title}`;

    wrapper.appendChild(placeholder);
    videoContainer.appendChild(videoTitle);
    videoList.appendChild(videoContainer);

    wrapper.addEventListener('click', () => {
      btnPlay.style.display = 'none';
      loader.style.opacity = 1;
      wrapper.appendChild(iframe);
      iframe.onload = () => {
        placeholder.style.opacity = '0';
        iframe.style.opacity = '1';
      };
    });
  });
}
