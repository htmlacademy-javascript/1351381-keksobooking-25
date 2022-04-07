import './user-form.js';
import './form-page.js';
import './price-slider.js';
import {getMainMarker, getMarkerAd} from './map.js';
import {getSuccessModal} from './form-messages.js';
import {setUserFormSubmit} from './user-form.js';
import {getData} from './api.js';

const SIMILAR_AD_COUNT = 10;

getData((similarAds) => {
  getMarkerAd(similarAds.slice(0, SIMILAR_AD_COUNT));
});

setUserFormSubmit(getSuccessModal);
getMainMarker();
