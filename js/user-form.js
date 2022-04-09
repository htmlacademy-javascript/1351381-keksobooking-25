import '../pristine/pristine.min.js';
import './form-messages.js';
import {sendData} from './api.js';
import {resetForm} from './form-reseting.js';

const form = document.querySelector('.ad-form');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});

const roomsNumber = form.querySelector('#room_number');
const guestsNumber = form.querySelector('#capacity');
const roomsOptions = {
  '1': ['1'],
  '2': ['2','1'],
  '3': ['3','2','1'],
  '100':['0'],
};

const validateRooms = () => {
  const roomsValue = roomsOptions[roomsNumber.value];
  const guestsValue = guestsNumber.value;
  return roomsValue.includes(guestsValue);
};

const getRoomsErrorMessage = () => {
  const errorMessage ='Данные заполнены неверно';
  return errorMessage;
};

guestsNumber.addEventListener('change', () => {
  pristine.validate();
});

pristine.addValidator(roomsNumber, validateRooms, getRoomsErrorMessage);
pristine.addValidator(guestsNumber, validateRooms);

const price = form.querySelector('#price');
const houseType = form.querySelector('#type');
const houseOptions = {
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

const validateHouse = () => {
  for (const type in houseOptions) {
    if (type === houseType.value) {
      price.min = houseOptions[type];
      price.placeholder = houseOptions[type];
    }
  }
  return parseInt(price.value, 10) >= price.min;
};

const getHouseErrorMessage = () => {
  let type = houseType.options[houseType.selectedIndex].text;
  if (type === 'Квартира') {
    type = 'Квартиру';
  }
  const errorMessage = `Минимальная цена за ${type} ${price.min}₽`;
  return errorMessage;
};

pristine.addValidator(price, validateHouse);
pristine.addValidator(houseType, validateHouse, getHouseErrorMessage);

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});


timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

const resetButton = form.querySelector('.ad-form__reset');
resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

const setUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      sendData(
        onSuccess,
        onFail,
        new FormData(evt.target),
      );
    }
  });
};

export {setUserFormSubmit};
