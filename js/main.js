function getRandomInt(min, max) {
  return (min < 0 || max < 0) ? 'Вводите только положительные числа' : Math.floor(Math.random() * (max - min) + min);
}

getRandomInt();


function getRandomFloat(min, max, length) {
  return (min < 0 || max < 0) ? 'Вводите только положительные числа' : (Math.random() * (max - min) + min).toFixed(Math.floor(length));
}

getRandomFloat();
