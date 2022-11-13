import Notiflix from 'notiflix';

const { form, delayInput, stepInput, amountInput } = {
  form: document.querySelector('.form'),
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
};
let delay = null;
let step = null;
let amount = null;

delayInput.addEventListener('input', onInputDelay);
stepInput.addEventListener('input', onInputStep);
amountInput.addEventListener('input', onInputAmount);
form.addEventListener('submit', onSubmit);

function onInputDelay(event) {
  delay = Number(event.target.value);
  localStorage.setItem('first delay', delay);
}
function onInputStep(event) {
  step = Number(event.target.value);
}
function onInputAmount(event) {
  amount = Number(event.target.value);
}

function onSubmit(event) {
  event.preventDefault();
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay);
    delay += step;
  }
  delay = Number(localStorage.getItem('first delay'));
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
    });
}
