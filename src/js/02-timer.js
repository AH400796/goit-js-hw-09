import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

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
// const currentTime = Date.now();

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
      alert('Please choose a date in the future');
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
    }
    time = convertMs(deltaTime);
    setTimer();
    console.log(time);
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
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
