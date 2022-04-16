import './user-form.js';
import './form-page.js';
import './price-slider.js';
import './load-photos.js';
import {onFiltersChange} from './form-filters.js';
import {renderMainMarker, renderMarkers} from './map.js';
import {openSuccessMessagePopup, openErrorMessagePopup} from './form-messages.js';
import {onUserFormSubmit} from './user-form.js';
import {getData} from './api.js';
import {debounce} from './util.js';

const RERENDER_DELAY = 500;

getData((similarAds) => {
  renderMarkers(similarAds);
  onFiltersChange(debounce(
    () => renderMarkers(similarAds),
    RERENDER_DELAY,
  ));
});

onUserFormSubmit(openSuccessMessagePopup, openErrorMessagePopup);
renderMainMarker();
