const ALERT_SHOW_TIME = 5000;

const getRandomInt = (min = 1, max = 10) => {
  const lower = Math.ceil(min);
  const upper = Math.ceil(max);
  const result = (min < 0 || max < 0) ? 'Вводите только положительные числа' : Math.round(Math.random() * (upper - lower) + (lower));
  return result;
};

const getRandomFloat = (min = 1, max = 10, length = 1) => {
  const result = (min < 0 || max < 0) ? 'Вводите только положительные числа' : (Math.random() * (max - min) + min);
  return +result.toFixed(Math.floor(length));
};

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  return randomElement;
};

const getRandomArray = (array) => {
  const arrayLength  = getRandomInt(0, array.length);
  const randomArray = [];
  for (let i = 0; i < arrayLength; i++) {
    const randomElement = getRandomElement(array);
    randomArray.push(randomElement);
  }
  const uniqueRandomArray = Array.from(new Set(randomArray));
  return uniqueRandomArray;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getRandomInt, getRandomFloat, getRandomElement, getRandomArray, debounce, showAlert};
