import {MOCK_DATA} from './data.js';

const mapCanvas = document.querySelector('#map-canvas');
const popupTemplate = document.querySelector('#card').content.querySelector('.popup');

// const mockElement = MOCK_DATA[0];
const popupFilling = (mockElement) => {
  const popupFilled = popupTemplate.cloneNode(true);

  popupFilled.querySelector('.popup__avatar').src = mockElement.author.avatar;

  popupFilled.querySelector('.popup__title').textContent = mockElement.offer.title;

  popupFilled.querySelector('.popup__text--address').textContent = mockElement.offer.address;

  popupFilled.querySelector('.popup__text--price').textContent = `${mockElement.offer.price}000 ₽/ночь`;

  const popupType = popupFilled.querySelector('.popup__type');
  const getHousingTypeListElement = () => {
    const housingTypes = document.getElementById('housing-type');
    const housingTypeList = housingTypes.querySelectorAll('option');
    let housingTypeListElement;
    for (let i = 0; i < housingTypeList.length; i++) {
      if (mockElement.offer.type === housingTypeList[i].value) {
        housingTypeListElement = housingTypeList[i].textContent;
      }
    }
    return housingTypeListElement;
  };
  popupType.textContent = getHousingTypeListElement();

  popupFilled.querySelector('.popup__text--capacity').textContent = `${mockElement.offer.rooms} комнаты для ${mockElement.offer.guests} гостей`;

  popupFilled.querySelector('.popup__text--time').textContent = `Заезд после ${mockElement.offer.checkin}, выезд до ${mockElement.offer.checkout}`;

  const popupFeaturesContainer = popupFilled.querySelector('.popup__features');
  const popupFeaturesList = popupFeaturesContainer.querySelectorAll('.popup__feature');
  const modifiers = mockElement.offer.features.map((feature) => `popup__feature--${feature}`);
  if (mockElement.offer.features.length !== 0) {
    popupFeaturesList.forEach((popupFeaturesItem) => {
      const modifier = popupFeaturesItem.classList[1];

      if (!modifiers.includes(modifier)) {
        popupFeaturesItem.remove();
      }
    });
  } else {
    popupFeaturesContainer.remove();
  }

  const popupDescription = popupFilled.querySelector('.popup__description');
  if (mockElement.offer.description) {
    popupDescription.textContent = mockElement.offer.description;
  } else {
    popupDescription.remove();
  }

  const popupImagesHousing = popupFilled.querySelector('.popup__photos');
  const popupImageOfHouse = popupImagesHousing.querySelector('.popup__photo');
  if (mockElement.offer.photos.length !== 0) {
    popupImageOfHouse.remove();
    const photosList = mockElement.offer.photos;
    for (let i = 0; i < photosList.length; i++) {
      const photosListItem = popupImageOfHouse.cloneNode(true);
      photosListItem.src = photosList[i];
      popupImagesHousing.appendChild(photosListItem);
    }
  } else {
    popupImagesHousing.remove();
  }

  return popupFilled;
};

mapCanvas.appendChild(popupFilling(MOCK_DATA[0]));
