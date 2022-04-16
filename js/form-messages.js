const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorCloseButton = errorMessage.querySelector('.error__button');

const onSuccessMessageEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccessMessagePopup();
  }
};

function closeSuccessMessagePopup () {
  successMessage.remove();

  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
}

const openSuccessMessagePopup = () => {
  document.body.appendChild(successMessage);

  successMessage.addEventListener('click', closeSuccessMessagePopup);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
};

const onErrorMessageEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeErrorMessagePopup();
  }
};

function closeErrorMessagePopup () {
  errorMessage.remove();
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
}

const openErrorMessagePopup = () => {
  document.body.appendChild(errorMessage);

  errorMessage.addEventListener('click', closeErrorMessagePopup);

  document.addEventListener('keydown', onErrorMessageEscKeydown);

  errorCloseButton.addEventListener('click', () => {
    errorMessage.remove();
  });
};

export {openSuccessMessagePopup, openErrorMessagePopup};
