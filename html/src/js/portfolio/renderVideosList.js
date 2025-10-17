export function renderVideosList(videos, container) {
  container.innerHTML = '';

  if (!videos || videos.length <= 0) {
    const noVideosMessage = document.createElement('p');
    noVideosMessage.textContent = 'Keine Videos gefunden';
    container.appendChild(noVideosMessage);
    return;
  }

  videos.map((video) => {
    const videoContainer = document.createElement('li');
    videoContainer.className = 'video-container';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.id}`;
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;

    const videoTitle = document.createElement('p');
    videoTitle.className = 'video-title';
    videoTitle.textContent = `${video.title}`;

    videoContainer.appendChild(iframe);
    videoContainer.appendChild(videoTitle);
    container.appendChild(videoContainer);
  });
}
