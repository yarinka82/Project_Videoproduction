import { exampleCategories } from "../../../db/categories.js";
import { getApi } from "../service.js";

export async function fetchCategory() {
  const { list: category } = await getApi("/video/categories/", exampleCategories);
  return category;
}
