import { setCategoryId } from '../slaider/categoryId.js';
import { fetchVideo } from '../slaider/fetchVideo.js';
import { renderVideos } from '../slaider/renderVideos.js';
import { updatePagination } from '../slaider/updatePagination.js';

export async function handleCategoryClick(categoryId) {
  try {
    const { list, pagination } = await fetchVideo({ category: categoryId });

    setCategoryId(categoryId);
    renderVideos(list);
    updatePagination({
      page: pagination.current_page,
      totalPages: pagination.total_pages,
      hasPrev: pagination.has_previous,
      hasNext: pagination.has_next,
    });
  } catch (error) {
    console.error('Failed to load videos:', error);
  }
}
