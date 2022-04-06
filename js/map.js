import {activateForm} from './form-page.js';
import {popupFilling} from './bind-popup.js';

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

const mainMarker = L.marker(
  {
    lat: 35.6817,
    lng: 139.7539,
  },
  {
    draggable: true,
    icon: mainMarketIcon,
  },
);

mainMarker.addTo(map);

const address = document.querySelector('#address');
address.value = '35.6817, 139.7539';

mainMarker.on('move ', (evt) => {
  const coordinates = evt.target.getLatLng();
  address.value = `${coordinates.lat.toFixed(4)}, ${coordinates.lng.toFixed(4)}`;
});

const similarMarkerIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const getMarkerAd = (arraySimilarAds) => {
  arraySimilarAds.forEach((point) => {
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
      .addTo(map)
      .bindPopup(popupFilling(point));
  });
};


export {getMarkerAd};


