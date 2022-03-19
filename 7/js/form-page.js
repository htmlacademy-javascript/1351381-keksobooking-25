const adForm = document.querySelector('.ad-form');
const mapForm =document.querySelector('.map__filters');

const formDisabling = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('map__filters--disabled');

  const elemDisabling = (form) => {
    for (const elemForm of form) {
      elemForm.disabled = true;
    }
  };

  elemDisabling(adForm);
  elemDisabling(mapForm);
};

formDisabling();

const formActivating = () => {
  adForm.classList.remove('ad__form--disabled');
  mapForm.classList.remove('map__filters--disabled');

  const elemActivating = (form) => {
    for (const elemForm of form) {
      elemForm.disabled = false;
    }
  };

  elemActivating(adForm);
  elemActivating(mapForm);
};

export {formActivating};
