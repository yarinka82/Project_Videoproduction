import { faqList } from "../../../db/faq.js";
import { getApi } from "../service.js";

export async function fetchFaq() {
  const { list, pagination } = await getApi("/faq/", faqList);
  return { list, pagination };
}
