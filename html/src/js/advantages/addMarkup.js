function addMarkup(ref, tmp, data) {
  Handlebars.registerHelper('alternatingClass', function (index, class1, class2) {
  return (index % 2 !== 0) ? class1 : class2;
});

  const template = Handlebars.compile(tmp);
  const markup = template(data);

  ref.innerHTML = markup;
}

export default addMarkup;
