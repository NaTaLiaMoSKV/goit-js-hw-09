import "notiflix/dist/notiflix-3.2.5.min.css";
import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  let position = 1;
  const delay = Number(delayInput.value);
  const step = Number(stepInput.value); 
  const amount = Number(amountInput.value);
  let timeline = delay;

  const counter = setInterval(() => {
    createPromise(position, timeline).then(onCreatePromiseSuccess).catch(onCreatePromiseError);
    timeline += step;
    position++;
    if(position - amount === 1) clearInterval(counter);
  }, step);
  
};

function onCreatePromiseSuccess({ position, delay }) {
  Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function onCreatePromiseError({ position, delay }) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay)
  });
}



