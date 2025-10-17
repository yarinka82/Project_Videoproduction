import { renderVideosList } from './renderVideosList.js';

const exampleVideos = [
  { id: 'CjO9JVlbQSM', title: 'Video 1', categoryId: 5 },
  { id: 'toJEvF6L1Yk', title: 'Video 2', categoryId: 3 },
  { id: 'UQPqg4gSSXc', title: 'Video 3', categoryId: 4 },
];

export async function fetchVideos(categoryId) {
  const videoList = document.getElementById('videos');
  if (!videoList) return;

  const videos = categoryId
    ? exampleVideos.filter((v) => String(v.categoryId) === String(categoryId))
    : exampleVideos;

  renderVideosList(videos, videoList);
}
