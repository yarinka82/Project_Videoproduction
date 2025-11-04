import { fetchCategory } from '../slaider/fetchCategory.js';
import { handleCategoryClick } from './handleCategoryClick.js';

let cachedCategories = [];
let isListenerAttached = false;

export async function renderCategories() {
  const categoriesList = document.getElementById('video-categories');

  if (!categoriesList) return;

  categoriesList.innerHTML = '';

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
    textSpan.textContent = category.name;

    categoryItem.appendChild(textSpan);
    categoriesList.appendChild(categoryItem);
  });

  if (!isListenerAttached) {
    categoriesList.addEventListener('click', (e) => {
      const clickedItem = e.target.closest('li');
      if (!clickedItem) return;

      const categoryId = clickedItem.dataset.categoryId;

      try {
        handleCategoryClick(categoryId);
      } catch (error) {
        console.error('Failed to fetch videos:', error);
      }
      categoriesList.classList.add('hidden');
    });
    isListenerAttached = true;
  }
}
