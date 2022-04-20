const filters = document.querySelector('.map__filters');

const filterType = filters.querySelector('#housing-type');
const filterPrice = filters.querySelector('#housing-price');
const filterRooms = filters.querySelector('#housing-rooms');
const filterGuests = filters.querySelector('#housing-guests');

const onFiltersChange = (cb) => {
  filters.addEventListener('change', () => {
    cb();
  });
};

const compareAds = (elem) => {
  const checkType = () => filterType.value === 'any' || elem.offer.type === filterType.value;

  const checkPrice = () => filterPrice.value === 'any' || filterPrice.value === 'low' && elem.offer.price < 10000 || filterPrice.value === 'high' && elem.offer.price > 50000 || filterPrice.value === 'middle' && elem.offer.price >= 10000 && elem.offer.price <= 50000;

  const checkRooms = () => filterRooms.value === 'any' || elem.offer.rooms === Number(filterRooms.value);

  const checkGuests = () => filterGuests.value === 'any' || elem.offer.guests === Number(filterGuests.value);

  const checkFeatures = () => {
    const filterFeatures = [...filters.querySelectorAll('.map__checkbox:checked')];

    const arrFeatures = filterFeatures.map((item) => item.value);

    return !arrFeatures.length || (elem.offer.features && arrFeatures.every((feature) => elem.offer.features.includes(feature)));
  };

  return checkType() && checkPrice() && checkRooms() && checkGuests() && checkFeatures();
};

export {onFiltersChange, compareAds};
