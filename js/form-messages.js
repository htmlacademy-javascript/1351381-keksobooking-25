const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorCloseButton = errorMessage.querySelector('.error__button');

function onSuccessMessageClick (message) {
  message.remove();
  document.closeSuccessMessagePopup();
}

const onSuccessMessageEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessMessagePopup();
  }
};

function openSuccessMessagePopup () {
  document.body.appendChild(successMessage);

  successMessage.addEventListener('click', () => onSuccessMessageClick(successMessage));

  document.addEventListener('keydown', onSuccessMessageEscKeydown);
}

function closeSuccessMessagePopup () {
  successMessage.remove();

  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
}

const getSuccessModal = () => {
  openSuccessMessagePopup();

  successMessage.addEventListener('click', closeSuccessMessagePopup);
  document.addEventListener('keydown', closeSuccessMessagePopup);
};

function onErrorMessageClick () {
  errorMessage.remove();
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
}

function onErrorMessageEscKeydown (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessagePopup();
  }
}

function openErrorMessagePopup () {
  document.body.appendChild(errorMessage);

  errorMessage.addEventListener('click', onErrorMessageClick);

  document.addEventListener('keydown', onErrorMessageEscKeydown);

  errorCloseButton.addEventListener('click', () => {
    errorMessage.remove();
  });
}

function closeErrorMessagePopup () {
  errorMessage.remove();

  document.removeEventListener('keydown', onErrorMessageEscKeydown);
}

const getErrorModal = () => {
  openErrorMessagePopup();

  errorMessage.addEventListener('click', onErrorMessageClick);
  document.addEventListener('keydown', closeErrorMessagePopup);
};

export {getSuccessModal, getErrorModal};
