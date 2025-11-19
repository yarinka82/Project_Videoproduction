import { exampleVideos } from '../../../db/videos.js';
import { getApi } from '../service.js';

function getPerPage() {
  if (window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches) {
    return 1;
  } else if (
    window.matchMedia('(min-width: 768px) and (max-width: 968px)').matches
  ) {
    return 2;
  } else {
    return 3;
  }
}
export async function fetchVideo({ page = 1, perPage, category = null }) {
  perPage = getPerPage();
  let url = `/video/videos/?page=${page}&per_page=${perPage}`;
  if (category !== null) {
    url += `&category=${category}`;
  }

  const { list, pagination, lengthBackend } = await getApi(url, exampleVideos);
  return { list, pagination, lengthBackend };
}
