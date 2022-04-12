import {activateForm} from './form-page.js';
import {popupFilling} from './bind-popup.js';
import {compareAds} from './form-filters.js';
import {debounce} from './util.js';
const filters = document.querySelector('.map__filters');
const SIMILAR_AD_COUNT = 10;
const RERENDER_DELAY = 500;

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: 35.6817,
    lng: 139.7539,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainMarketIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const address = document.querySelector('#address');
address.value = '35.6817, 139.7539';

let mainMarker;

const renderMainMarker = () => {
  mainMarker = L.marker(
    {
      lat: 35.6817,
      lng: 139.7539,
    },
    {
      draggable: true,
      icon: mainMarketIcon,
    },
  );

  mainMarker.on('move ', (evt) => {
    const coordinates = evt.target.getLatLng();
    address.value = `${coordinates.lat.toFixed(4)}, ${coordinates.lng.toFixed(4)}`;
  });

  mainMarker.addTo(map);
};

const removeMainMarker = () => {
  mainMarker.remove();
};

const similarMarkerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const renderMarkers = (arraySimilarAds) => {
  const markerGroup = L.layerGroup().addTo(map);
  arraySimilarAds
    .slice()
    .filter((elem) => compareAds(elem))
    .slice(0, SIMILAR_AD_COUNT)
    .forEach((point) => {
      const lat = point.location.lat;
      const lng = point.location.lng;
      const similarMarker = L.marker(
        {
          lat,
          lng,
        },
        {
          icon: similarMarkerIcon,
        },
      );
      similarMarker
        .addTo(markerGroup)
        .bindPopup(popupFilling(point));
    });
  filters.addEventListener('change', debounce(
    () => {
      markerGroup.clearLayers();
    },
    RERENDER_DELAY,
  ));
};


export {map, removeMainMarker, renderMainMarker, renderMarkers};


