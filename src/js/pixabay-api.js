import axios from 'axios';

export const fetchPhotosByQuery = (searchedQuery, currentPage) => {
  const axiosOptions = {
    params: {
      q: searchedQuery,
      key: '48265594-3edacf02e8cadda91195713cc',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: currentPage,
      per_page: 15,
    },
  };
  return axios.get(`https://pixabay.com/api/`, axiosOptions);
};
