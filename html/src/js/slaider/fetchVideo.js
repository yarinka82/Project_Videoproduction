import { exampleVideos } from '../../../db/videos.js';
import { getApi } from '../service.js';

export async function fetchVideo({ page = 1, perPage = 3, category = null }) {
  let url = `/video/videos/?page=${page}&per_page=${perPage}`;
  if (category !== null) {
    url += `&category=${category}`;
  }

  const { list, pagination, lengthBackend } = await getApi(url, exampleVideos);
  console.log('🚀 ~ fetchVideo ~ list:', list);
  return { list, pagination, lengthBackend };
}
