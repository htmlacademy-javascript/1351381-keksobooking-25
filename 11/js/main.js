import './user-form.js';
import './form-page.js';
import './price-slider.js';
import {setFiltersChange} from './form-filters.js';
import {renderMainMarker, renderMarkers} from './map.js';
import {getErrorModal, getSuccessModal} from './form-messages.js';
import {setUserFormSubmit} from './user-form.js';
import {getData} from './api.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

getData((similarAds) => {
  renderMarkers(similarAds);
  setFiltersChange(debounce(
    () => renderMarkers(similarAds),
    RERENDER_DELAY,
  ));
});

setUserFormSubmit(getSuccessModal, getErrorModal);
renderMainMarker();
