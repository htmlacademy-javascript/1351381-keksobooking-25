const getRandomInt = (min = 1, max = 10) => {
  const lower = Math.ceil(min);
  const upper = Math.ceil(max);
  const result = (min < 0 || max < 0) ? 'Вводите только положительные числа' : Math.floor(Math.random() * (upper - lower) + (lower));
  return result;
};

const getRandomFloat = (min = 1, max = 10, length = 1) => {
  const result = (min < 0 || max < 0) ? 'Вводите только положительные числа' : (Math.random() * (max - min) + min);
  return +result.toFixed(Math.floor(length));
};

export {getRandomInt, getRandomFloat};
