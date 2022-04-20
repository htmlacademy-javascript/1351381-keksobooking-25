const sliderPrice = document.querySelector('.ad-form__slider');
const inputPrice = document.querySelector('#price');

const MIN_PRICE = 0;
const MAX_PRICE = 100000;
const START_PRICE = 1000;

noUiSlider.create(sliderPrice, {
  range: {
    min: MIN_PRICE,
    max: MAX_PRICE,
  },
  start: START_PRICE,
  step: 1,
  connect: 'lower',
  format: window.wNumb({
    decimals: 0,
  }),
});

sliderPrice.noUiSlider.on('update', () => {
  inputPrice.value = sliderPrice.noUiSlider.get();
});

inputPrice.addEventListener('change', () => {
  sliderPrice.noUiSlider.set(inputPrice.value);
});
