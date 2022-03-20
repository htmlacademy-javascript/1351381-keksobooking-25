const adForm = document.querySelector('.ad-form');
const mapForm =document.querySelector('.map__filters');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');

  const disasleElem = (form) => {
    for (const elemForm of form) {
      elemForm.disabled = true;
    }
  };

  disasleElem(adForm);
  disasleElem(mapForm);
};

disableForm();

const activateForm = () => {
  adForm.classList.remove('ad__form--disabled');
  mapForm.classList.remove('map__filters--disabled');

  const activateElem = (form) => {
    for (const elemForm of form) {
      elemForm.disabled = false;
    }
  };

  activateElem(adForm);
  activateElem(mapForm);
};

export {activateForm};
