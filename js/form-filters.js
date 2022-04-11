const filters = document.querySelector('.map__filters');

const setFiltersChange = (cb) => {
  filters.addEventListener('change', () => {
    cb();
  });
};

const filterType = filters.querySelector('#housing-type');
const filterPrice = filters.querySelector('#housing-price');
const filterRooms = filters.querySelector('#housing-rooms');
const filterGuests = filters.querySelector('#housing-guests');

const compareAds = (elem) => {
  const checkType = () => {
    if (filterType.value === 'any') {
      return true;
    } else if (elem.offer.type === filterType.value) {
      return true;
    } else {
      return false;
    }
  };
  const checkPrice = () => {
    if (filterPrice.value === 'any') {
      return true;
    } else if (filterPrice.value === 'low' && elem.offer.price < 10000) {
      return true;
    } else if (filterPrice.value === 'high' && elem.offer.price > 50000) {
      return true;
    } else if (filterPrice.value === 'middle' && elem.offer.price >= 10000 && elem.offer.price <= 50000) {
      return true;
    } else {
      return false;
    }
  };
  const checkRooms = () => {
    if (filterRooms.value === 'any') {
      return true;
    } else if (elem.offer.rooms === Number(filterRooms.value)) {
      return true;
    } else {
      return false;
    }
  };
  const checkGuests = () => {
    if (filterGuests.value === 'any') {
      return true;
    } else if (elem.offer.guests === Number(filterGuests.value)) {
      return true;
    } else {
      return false;
    }
  };

  const checkFeatures = () => {
    const filterFeatures = [...filters.querySelectorAll('.map__checkbox:checked')];

    const arrFeatures = filterFeatures.map((item) => item.value);

    if (!arrFeatures.length) {
      return true;
    } else if (elem.offer.features) {
      return arrFeatures.every((feature) => elem.offer.features.includes(feature));
    } else {
      return false;
    }
  };

  return checkType() && checkPrice() && checkRooms() && checkGuests() && checkFeatures();
};

export {setFiltersChange, compareAds};
