import { fetchVideos } from './fetchVideos.js';

export function renderCategoryVideos() {
  const videosList = document.getElementById('videos');
  const videoCategories = document.getElementById('video-categories');

  if (!videoCategories || !videosList) return;

  // Avoid attaching multiple listeners
  if (videoCategories.dataset.listenerAttached === 'true') return;

  videoCategories.addEventListener('click', (event) => {
    const clickedItem = event.target.closest('li');
    if (!clickedItem) return;

    const categoryId = clickedItem.dataset.categoryId;
    console.log('Clicked category:', categoryId);

    fetchVideos(categoryId); // render videos for the clicked category

    videoCategories.classList.add('hidden'); // hide categories if needed
  });

  videoCategories.dataset.listenerAttached = 'true';
}
