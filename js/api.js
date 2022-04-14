import {resetForm} from './form-reseting.js';
import { showAlert } from './util.js';

const getData = (onSuccess) => {
  fetch('https://25.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((similarAds) => {
      onSuccess(similarAds);
    })
    .catch(() => showAlert('Не удалось получить данные. Попробуйте обновить страницу.'));
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://25.javascript.pages.academy/404',
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
