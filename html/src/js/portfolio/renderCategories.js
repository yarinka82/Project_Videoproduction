const exampleCategories = [
  'Von allem etwas',
  'Spiritualität & Mindset',
  'Investment & Kapital',
  'Kommunen & Städte',
  'Solar & Energie',
  'Camping',
  'Immobilien',
  'Industrie',
  'Sport',
  'Dienstleister',
  'Gartenlandschaftsbau',
  'Museum',
  'Handwerk',
  'Shops',
  'Finanzdienstleistung',
  'Architektur',
  'Hausverwaltung',
  'Automobil',
  'Pflege',
  'Filmemacher',
];

export async function renderCategories() {
  const categoriesList = document.getElementById('video-categories');

  exampleCategories.map((category) => {
    const categoryItem = document.createElement('li');
    categoryItem.className = 'category-item';

    const textSpan = document.createElement('span');
    textSpan.textContent = `${category}`;

    categoryItem.appendChild(textSpan);
    categoriesList.appendChild(categoryItem);
  });
}
