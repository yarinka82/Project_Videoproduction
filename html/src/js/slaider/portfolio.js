import { startObserver } from '../common/observer.js';
import { animatePageTransition } from './animatePageTransition.js';
import { fetchCategory } from './fetchCategory.js';
import { fetchVideo } from './fetchVideo.js';
import { renderVideos } from './renderVideos.js';
import { updatePagination } from './updatePagination.js';

let currentPage = 1;
export let categoryId = null;
export const perPage = 3;

export function initPortfolio() {
  startObserver('.portfolio-subtitle', async () => {
    const { list: videos, pagination } = await fetchVideo({page: currentPage, perPage,  category: categoryId});

    renderVideos(videos);
    fetchCategory();
    updatePagination({
      page: pagination.current_page,
      totalPages: pagination.total_pages,
      hasPrev: pagination.has_previous,
      hasNext: pagination.has_next,
    });
  }, "subtitle-visible");

  document
    .getElementById('portfolio-next-btn')
    .addEventListener('click', async () => {
      currentPage++;
      const { list: videos, pagination } = await fetchVideo({page: currentPage, perPage,  category: categoryId});
      animatePageTransition(videos, 'left');
      updatePagination({
        page: pagination.current_page,
        totalPages: pagination.total_pages,
        hasPrev: pagination.has_previous,
        hasNext: pagination.has_next,
      });
    });

  document
    .getElementById('portfolio-prev-btn')
    .addEventListener('click', async () => {
      currentPage--;
      const { list: videos, pagination } = await fetchVideo(
        {page: currentPage, perPage,  category: categoryId}
      );
      animatePageTransition(videos, 'left');
      updatePagination({
        page: pagination.current_page,
        totalPages: pagination.total_pages,
        hasPrev: pagination.has_previous,
        hasNext: pagination.has_next,
      });
    });

  document
    .getElementById('portfolio-dots')
    .addEventListener('click', async (e) => {
      if (e.target.classList.contains('dot')) {
        const selectedPage = parseInt(e.target.dataset.page);
        const direction = selectedPage > currentPage ? 'left' : 'right';
        currentPage = selectedPage;

        const { list: videos, pagination } = await fetchVideo(
          {page: currentPage, perPage,  category: categoryId}
        );
        animatePageTransition(videos, direction);
        updatePagination({
          page: pagination.current_page,
          totalPages: pagination.total_pages,
          hasPrev: pagination.has_previous,
          hasNext: pagination.has_next,
        });
      }
    });
}
