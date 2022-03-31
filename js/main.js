import './user-form.js';
import './form-page.js';
import './price-slider.js';
import {getMarkerAd} from './map.js';

const SIMILAR_AD_COUNT = 10;

fetch('https://25.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((similarAds) => {
    getMarkerAd(similarAds.slice(0, SIMILAR_AD_COUNT));
  });
