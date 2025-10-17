import { fetchVideos } from './fetchVideos.js';

export const exampleCategories = [
  { id: 2, name: 'Von allem etwas' },
  { id: 3, name: 'Spiritualität & Mindset' },
  { id: 4, name: 'Investment & Kapital' },
  { id: 5, name: 'Kommunen & Städte' },
  { id: 6, name: 'Solar & Energie' },
  { id: 7, name: 'Camping' },
  { id: 8, name: 'Immobilien' },
  { id: 9, name: 'Industrie' },
  { id: 10, name: 'Dienstleister' },
  { id: 11, name: 'Gartenlandschaftsbau' },
  { id: 12, name: 'Museum' },
  { id: 13, name: 'Handwerk' },
  { id: 14, name: 'Finanzdienstleistung' },
  { id: 15, name: 'Architektur' },
  { id: 16, name: 'Automobil' },
  { id: 17, name: 'Pflege' },
  { id: 18, name: 'Filmemacher' },
];

export async function renderCategories(categories) {
  const categoriesList = document.getElementById('video-categories');

  categories.map((category) => {
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
