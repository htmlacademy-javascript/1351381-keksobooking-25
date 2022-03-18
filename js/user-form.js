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
pristine.addValidator(guestsNumber);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
// asdasd
