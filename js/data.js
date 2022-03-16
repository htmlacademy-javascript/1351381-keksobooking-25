import {getRandomInt, getRandomFloat, getRandomElement, getRandomArray} from './util.js';

const REVIEW_COUNT = 10;

function getRandomAvatarArray(min, max) {
  const indexAvatarArray = [];

  return function() {
    for (let i =0; i < max; i++) {
      let indexAvatar = getRandomInt(min, max);

      while (indexAvatarArray.includes(`img/avatars/user${indexAvatar}.png`)) {
        indexAvatar = getRandomInt(min, max);
      }

      if (indexAvatar < 10) {
        indexAvatar = `0${indexAvatar}`;
      }

      indexAvatarArray.push(`img/avatars/user${indexAvatar}.png`);
    }
    return indexAvatarArray;
  };
}

const getRandomAvatar = getRandomAvatarArray(1, REVIEW_COUNT);

const type = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const check = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];

const getLocation = () => {
  const LOCATION = {
    lat: getRandomFloat(35.65000, 35.70000, 4),
    lng: getRandomFloat(139.70000, 139.80000, 4)
  };
  return LOCATION;
};

const getMockData = (count) => {
  const objectIndex = getRandomAvatar();
  const mockArray = [];
  let i = 0;
  while (i < count) {
    const location = getLocation();
    const someObject = {
      author: {
        avatar: objectIndex[i],
      },
      offer: {
        title: 'Милая, уютная квартирка в центре',
        address: `${location.lat}, ${location.lng}`,
        price: getRandomInt(),
        type: getRandomElement(type),
        rooms: getRandomInt(),
        guests: getRandomInt(),
        checkin: getRandomElement(check),
        checkout: getRandomElement(check),
        features: getRandomArray(features),
        description: 'Замечательно и вообще просто прекрасно.',
        photos: getRandomArray(photos),
      },
      location: location,
    };
    mockArray.push(someObject);
    i++;
  }
  return mockArray;
};

const MOCK_DATA = getMockData(REVIEW_COUNT);

export {MOCK_DATA};
