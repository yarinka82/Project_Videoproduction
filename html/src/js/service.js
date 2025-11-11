export const baseUrl = 'https://videoproduction.onrender.com';
export const BASE_URL = `${baseUrl}/api`;

export async function getApi(endpoint, baseList, options = {}) {
  const url = `${BASE_URL}${endpoint}`;

  let pagination = {
    current_page: 1,
    total_pages: 1,
    next_page: null,
    prev_page: null,
    has_next: false,
    has_previous: false,
  };

  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  try {
    const response = await fetch(url, defaultOptions);
    const res = await response.json();
    if (res.status === 200) {
      if (res.pagination)
        pagination = {
          current_page: res.pagination.page,
          total_pages: res.pagination.total_pages,
          next_page: res.pagination.next_page,
          prev_page: res.pagination.prev_page,
          has_next: res.pagination.has_next,
          has_previous: res.pagination.has_previous,
        };
      return { list: res.list, pagination };
    } else {
      return { list: baseList, pagination };
    }
  } catch (error) {
    console.log('🚀 ~ getApi ~ error:', error);
    return { list: baseList, pagination };
  }
}
