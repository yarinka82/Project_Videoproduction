const exampleVideos = [
  { id: 'CjO9JVlbQSM', title: 'Video 1' },
  { id: 'toJEvF6L1Yk', title: 'Video 2' },
  { id: 'UQPqg4gSSXc', title: 'Video 3' },
];

export async function fetchVideos() {
  const videoList = document.getElementById('videos');

  exampleVideos.map((video) => {
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
    videoList.appendChild(videoContainer);
  });
}
