import { setCategoryId } from '../slaider/categoryId.js';
import { fetchVideo } from '../slaider/fetchVideo.js';
import { renderVideos } from '../slaider/renderVideos.js';
import { closeCategoriesList } from './closeCategoriesList.js';

export async function handleCategoryClick(categoryId) {
  try {
    const { list } = await fetchVideo({ category: categoryId });

    setCategoryId(categoryId);
    renderVideos(list);
  } catch (error) {
    console.error('Failed to load videos:', error);
  }
  closeCategoriesList();
}
