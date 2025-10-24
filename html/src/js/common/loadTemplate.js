async function loadTemplate(src) {
  try {
    const response = await fetch(src);
    const templateString = await response.text();

    return templateString;
  } catch (error) {
    console.error('Error loading template:', error);
  }
}

export default loadTemplate;
