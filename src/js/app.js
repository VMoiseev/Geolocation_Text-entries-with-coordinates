// TODO: write code here

import getTime from './time';
import { load } from './storage';
import getCoords from './coords';
import { createMessage } from './textEntry';

const form = document.querySelector('.form');
const modal = document.querySelector('.modal');
const inputMessage = document.querySelector('.input');
const inputModal = document.querySelector('.location');
const input = document.querySelector('.input');

load();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { value } = inputMessage;
  const time = getTime();
  let coords = null;

  navigator.geolocation.getCurrentPosition(
    (position) => {
      coords = `[${position.coords.latitude}, -${position.coords.longitude}]`;
      createMessage(time, value, coords);
    },
    () => {
      modal.style.display = 'block';
      inputModal.focus();
    },
  );
});

const locationForm = document.querySelector('.locationForm');
locationForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const time = getTime();
  const { value } = inputMessage;
  if (inputModal.value.includes(',')) {
    const inputed = getCoords(inputModal.value);
    if (inputed === false) {
      alert('Проверьте правильность ввода');
    } else {
      modal.style.display = 'none';
      createMessage(time, value, inputed);
      inputModal.value = '';
    }
  } else {
    alert('Проверьте правильность ввода');
  }
});

const cancel = document.querySelector('.cancel');
cancel.addEventListener('click', () => {
  modal.style.display = 'none';
  input.focus();
});
