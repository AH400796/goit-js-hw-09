import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const { startBtn, ouputDays, ouputHours, ouputMinutes, ouputSeconds } = {
  startBtn: document.querySelector('[data-start]'),
  ouputDays: document.querySelector('[data-days]'),
  ouputHours: document.querySelector('[data-hours]'),
  ouputMinutes: document.querySelector('[data-minutes]'),
  ouputSeconds: document.querySelector('[data-seconds]'),
};

let timerId = null;
let timeToDate = null;
let time = {};
let isClicked = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    timeToDate = selectedDates[0].getTime();
    if (timeToDate > Date.now()) {
      startBtn.removeAttribute('disabled');
    } else {
      setAtrrDisabled();
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

setAtrrDisabled();
flatpickr('#datetime-picker', options);

startBtn.addEventListener('click', onClickStart);

function setAtrrDisabled() {
  startBtn.setAttribute('disabled', true);
}

function onClickStart() {
  if (isClicked) {
    return;
  }
  isClicked = true;
  timerId = setInterval(() => {
    const deltaTime = timeToDate - Date.now();
    if (deltaTime < 1000) {
      clearInterval(timerId);
      setAtrrDisabled();
      isClicked = false;
      Notiflix.Notify.success('The time has come!');
    }
    time = convertMs(deltaTime);
    setTimer();
  }, 1000);
}

function setTimer() {
  ouputDays.textContent = addLeadingZero(time.days);
  ouputHours.textContent = addLeadingZero(time.hours);
  ouputMinutes.textContent = addLeadingZero(time.minutes);
  ouputSeconds.textContent = addLeadingZero(time.seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, [0]);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
