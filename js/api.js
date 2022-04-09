import {resetForm} from './form-reseting.js';

const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((similarAds) => {
      onSuccess(similarAds);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://25.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        resetForm();
      } else {
        onFail();
      }
    })
    .catch(() => onFail());
};

export {getData, sendData};
