import '../pristine/pristine.min.js';
import './form-messages.js';
import {sendData} from './api.js';
import {resetForm} from './form-reseting.js';

const form = document.querySelector('.ad-form');

const roomsNumber = form.querySelector('#room_number');
const guestsNumber = form.querySelector('#capacity');
const roomsOptions = {
  '1': ['1'],
  '2': ['2','1'],
  '3': ['3','2','1'],
  '100':['0'],
};

const price = form.querySelector('#price');
const houseType = form.querySelector('#type');
const houseOptions = {
  'bungalow': '0',
  'flat': '1000',
  'hotel': '3000',
  'house': '5000',
  'palace': '10000',
};

const timeIn = form.querySelector('#timein');
const timeOut = form.querySelector('#timeout');

const resetButton = form.querySelector('.ad-form__reset');

const submitButton = form.querySelector('.ad-form__submit');

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
});

const validateRooms = () => {
  const roomsValue = roomsOptions[roomsNumber.value];
  const guestsValue = guestsNumber.value;
  return roomsValue.includes(guestsValue);
};

const getRoomsErrorMessage = () => {
  const roomsValue = parseInt(roomsNumber.value, 10);
  const guestsValue = parseInt(guestsNumber.value, 10);
  let errorMessage = '';

  if (roomsValue !== 100 && guestsValue === 0) {
    errorMessage = 'Недостаточно гостей';
  } else if (roomsValue < guestsValue) {
    errorMessage ='Гостей очень много';
  } else if (roomsValue === 100 && guestsValue !== 0) {
    errorMessage = 'Данный вариант не для гостей';
  }
  return errorMessage;
};

guestsNumber.addEventListener('change', () => {
  pristine.validate();
});

pristine.addValidator(roomsNumber, validateRooms, getRoomsErrorMessage);
pristine.addValidator(guestsNumber, validateRooms);

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

timeIn.addEventListener('change', (evt) => {
  timeOut.value = evt.target.value;
});

timeOut.addEventListener('change', (evt) => {
  timeIn.value = evt.target.value;
});

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикация...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const onUserFormSubmit = (onSuccess, onFail) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData(() =>{
        onSuccess();
        unblockSubmitButton();
      },
      () => {
        onFail();
        unblockSubmitButton();
      },
      new FormData(evt.target),
      );
    }
  });
};

export {onUserFormSubmit};
