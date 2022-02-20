function getRandomInt(min, max) {
  if (min < 0 || max < 0) {
    return 'Вводите только положительные числа';
  }

  return Math.floor(Math.random() * (max - min) + min);
}

getRandomInt();


function getRandomFloat(min, max, length) {
  if (min < 0 || max < 0) {
    return 'Вводите только положительные числа';
  }

  return (Math.random() * (max - min) + min).toFixed(length);
}

getRandomFloat();
