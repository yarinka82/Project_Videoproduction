export function closeCategoriesList() {
  const categoriesList = document.getElementById('video-categories');
  const toggleButton = document.getElementById('categories-button');

  if (categoriesList) categoriesList.classList.add('hidden');
  if (toggleButton) toggleButton.classList.remove('is-open');
}
