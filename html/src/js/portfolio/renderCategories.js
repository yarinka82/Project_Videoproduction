import { fetchCategory } from '../slaider/fetchCategory.js';
import { fetchVideos } from './fetchVideos.js';

let cachedCategories = [];

export async function renderCategories() {
  const categoriesList = document.getElementById('video-categories');

  if (!categoriesList) return;

  const fetchedCategories = await fetchCategory();

  const isListSame =
    cachedCategories.length === fetchedCategories.length &&
    fetchedCategories.every((cat, i) => cat.id === cachedCategories[i].id);

  if (!isListSame) cachedCategories = fetchedCategories;

  cachedCategories.map((category) => {
    const categoryItem = document.createElement('li');
    categoryItem.className = 'category-item';
    categoryItem.dataset.categoryId = category.id;

    const textSpan = document.createElement('span');
    textSpan.textContent = `${category.name}`;

    categoryItem.appendChild(textSpan);
    categoriesList.appendChild(categoryItem);
  });

  categoriesList.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('li');
    if (!clickedItem) return;
    fetchVideos(clickedItem.dataset.categoryId);
    categoriesList.classList.add('hidden');
  });
}
