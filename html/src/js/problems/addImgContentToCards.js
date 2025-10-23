import addMarkup from "./addMarkup.js";
import loadTemplate from "../common/loadTemplate.js";

export async function addImgContentToCard(refsArr, templatesLinksArr) {
  if (refsArr.length !==templatesLinksArr.length) return;

  templatesLinksArr.forEach((tmpLink, i) => {
    try {
      loadTemplate(tmpLink).then(tmp => {
        addMarkup(refsArr[i], tmp, []);
      });
    } catch (err) {
      throw new Error(err)
    }
  });
}
