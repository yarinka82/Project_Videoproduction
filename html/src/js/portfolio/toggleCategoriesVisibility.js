import { renderCategories } from './renderCategories.js';

async function toggleCategoriesVisibility() {
  const categoriesList = document.getElementById('video-categories');
  const toggleButton = document.getElementById('categories-button');

  if (!categoriesList || !toggleButton) return;

  const isNowHidden = categoriesList.classList.toggle('hidden');

  if (!isNowHidden) {
    toggleButton.classList.add('is-open');
    await renderCategories();
  } else {
    toggleButton.classList.remove('is-open');
    categoriesList.innerHTML = '';
  }
}

export function initializeCategoryToggle() {
  const toggleButton = document.getElementById('categories-button');
  if (toggleButton) {
    toggleButton.addEventListener('click', toggleCategoriesVisibility);
  }
}
