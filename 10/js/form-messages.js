const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');

const getSuccessModal = () => {
  const successMessage = successMessageTemplate.cloneNode(true);

  document.body.appendChild(successMessage);

  addEventListener('click', () => {
    successMessage.remove();
  });

  addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      successMessage.remove();
    }
  });
};

const getErrorModal = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  const errorCloseButton = errorMessage.querySelector('.error__button');

  document.body.appendChild(errorMessage);

  addEventListener('click', () => {
    errorMessage.remove();
  });

  addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      errorMessage.remove();
    }
  });

  errorCloseButton.addEventListener('click', () => {
    errorMessage.remove();
  });
};

export {getSuccessModal, getErrorModal};
