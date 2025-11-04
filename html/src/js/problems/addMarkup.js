async function addMarkup(ref, tmp, data) {
  const template = Handlebars.compile(tmp);
  const markup = template(data);

  ref.innerHTML = markup;
}

export default addMarkup;
