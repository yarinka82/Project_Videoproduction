import { renderCategories } from './renderCategories.js';

function toggleCategoriesVisibility() {
  const categoriesList = document.getElementById('video-categories');
  const toggleButton = document.getElementById('categories-button');

  if (!categoriesList || !toggleButton) return;

  const isNowHidden = categoriesList.classList.toggle('hidden');

  if (!isNowHidden) {
    toggleButton.classList.add('is-open');
    renderCategories();
  } else {
    toggleButton.classList.remove('is-open');
  }
}

export function initializeCategoryToggle() {
  const toggleButton = document.getElementById('categories-button');
  if (toggleButton)
    toggleButton.addEventListener('click', toggleCategoriesVisibility);
}
