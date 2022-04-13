const sliderPrice = document.querySelector('.ad-form__slider');
const inputPrice = document.querySelector('#price');

noUiSlider.create(sliderPrice, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 1000,
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
