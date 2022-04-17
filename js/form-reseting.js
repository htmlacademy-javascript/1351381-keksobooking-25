import {map, removeMainMarker, renderMainMarker} from './map.js';
import {avatarPreview} from './load-photos.js';

const PRICE_DEFAULT = 1000;

const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const price = form.querySelector('#price');
const address = form.querySelector('#address');
const sliderPrice = document.querySelector('.ad-form__slider');
const imagesPreview = document.querySelector('.ad-form__photo');
const MAIN_POSITION_LAT = 35.6817;
const MAIN_POSITION_LNG = 139.7539;

const resetForm = () => {
  form.reset();
  mapFilters.reset();

  price.value = PRICE_DEFAULT;
  address.value = '35.6817, 139.7539';
  sliderPrice.noUiSlider.reset();
  map.setView({
    lat: MAIN_POSITION_LAT,
    lng: MAIN_POSITION_LNG,
  }, 12);
  removeMainMarker();
  renderMainMarker();
  map.closePopup();
  avatarPreview.src = 'img/muffin-grey.svg';
  imagesPreview.innerHTML = '';
};

export {resetForm};
