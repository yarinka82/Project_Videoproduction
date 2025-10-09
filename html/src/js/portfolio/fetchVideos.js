const exampleVideos = [
  { id: 'CjO9JVlbQSM' },
  { id: 'toJEvF6L1Yk' },
  { id: 'UQPqg4gSSXc' },
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

    videoContainer.appendChild(iframe);
    videoList.appendChild(videoContainer);
  });
}
