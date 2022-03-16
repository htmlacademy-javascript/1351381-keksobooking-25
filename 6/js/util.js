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

export {getRandomInt, getRandomFloat, getRandomElement, getRandomArray};
