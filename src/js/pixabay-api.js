import axios from 'axios';

export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
    q: searchedQuery,
    key: '48265594-3edacf02e8cadda91195713cc',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: '1',
    per_page: '15',
    totalHits: 'value',
  });
  return axios.get(`https://pixabay.com/api/?${searchParams}`);
};
