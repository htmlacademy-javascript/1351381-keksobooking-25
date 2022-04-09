import {map, removeMainMarker, renderMainMarker} from './map.js';

const form = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const price = form.querySelector('#price');
const address = form.querySelector('#address');
const sliderPrice = document.querySelector('.ad-form__slider');

const PRICE_DEFAULT = 1000;

const resetForm = () => {
  form.reset();
  mapFilters.reset();

  price.value = PRICE_DEFAULT.toFixed(2);
  address.value = '35.6817, 139.7539';
  sliderPrice.noUiSlider.reset();
  map.setView({
    lat: 35.6817,
    lng: 139.7539,
  }, 12);
  removeMainMarker();
  renderMainMarker();
  map.closePopup();
};

export {resetForm};
