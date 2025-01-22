import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGalleryCardTemplate } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';

const searchFormEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.js-load-more-btn');
let page = 1;
let searchedQuery = '';
const onSearchFormSubmit = async event => {
  try {
    event.preventDefault();
    searchedQuery = event.currentTarget.elements.user_query.value.trim();

    if (searchedQuery === '') {
      iziToast.error({
        message: 'Please enter your request',
        position: 'topRight',
      });
      return;
    }
    page = 1;
    loadMoreBtnEl.classList.add('is-hidden');
    loader.classList.remove('is-hidden');

    const { data } = await fetchPhotosByQuery(searchedQuery, page);

    if (data.total === 0) {
      iziToast.show({
        message:
          '"Sorry, there are no images matching your search query. Please try again!"',
        position: 'topRight',
      });

      galleryEl.innerHTML = '';

      return;
    }
    if (data.totalHits > 1) {
      loadMoreBtnEl.classList.remove('is-hidden');

      loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
    }
    const galleryTemplate = data.hits
      .map(el => createGalleryCardTemplate(el))
      .join('');
    galleryEl.innerHTML = galleryTemplate;

    loader.classList.add('is-hidden');
    scrollDown();

    const gallery = new SimpleLightbox('.js-gallery a', {
      captionDelay: 300,
      captionsData: 'alt',
    });
    gallery.refresh();

    searchFormEl.reset();
  } catch {
    err => {
      loader.style.display = 'none';
      console.log(err);
    };
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
searchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtnClick = async event => {
  try {
    page++;

    const { data } = await fetchPhotosByQuery(searchedQuery, page);

    const galleryTemplate = data.hits
      .map(el => createGalleryCardTemplate(el))
      .join('');

    galleryEl.insertAdjacentHTML('beforeend', galleryTemplate);

    if (page <= data.totalHits) {
      loadMoreBtnEl.classList.add('is-hidden');

      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
      scrollDown();
    }
  } catch (err) {
    console.log(err);
  }
};
function scrollDown() {
  let cardHeight = document
    .querySelector('.gallery-card')
    .getBoundingClientRect().height;
  console.log(document.body.scrollTop, Math.floor(cardHeight * 2));
  window.scrollBy({
    top: document.body.scrollTop + Math.floor(cardHeight * 2),
    behavior: 'smooth',
  });
}
