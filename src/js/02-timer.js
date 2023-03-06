import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
  dataInput: document.querySelector('#datetime-picker'),
  dataBtn: document.querySelector('button[data-start]'),
  dataDay: document.querySelector('span[data-days]'),
  dataHours: document.querySelector('span[data-hours]'),
  dataMinutes: document.querySelector('span[data-minutes]'),
  dataSeconds: document.querySelector('span[data-seconds]'),
};
refs.dataBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] - new Date() < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.dataBtn.disabled = false;
      refs.dataBtn.addEventListener('click', dataTimer);
      function dataTimer() {
        const timerId = setInterval(() => {
          let diff = selectedDates[0] - new Date();
          let countTime = convertMs(diff);
          if (diff < 1000) {
            clearInterval(timerId);
          }
          if (timerId) {
            refs.dataBtn.disabled = true;
          }
          refs.dataDay.textContent = countTime.days;
          refs.dataHours.textContent = countTime.hours;
          refs.dataMinutes.textContent = countTime.minutes;
          refs.dataSeconds.textContent = countTime.seconds;
        }, 1000);
      }
    }
  },
};
flatpickr(refs.dataInput, options);
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

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';
// const refs = {
//   btnStart: document.querySelector('button[data-start]'),
//   days: document.querySelector('span[data-days]'),
//   hours: document.querySelector('span[data-hours]'),
//   minutes: document.querySelector('span[data-minutes]'),
//   seconds: document.querySelector('span[data-seconds]'),
//   input: document.querySelector('#datetime-picker'),
// };
// refs.btnStart.disabled = true;
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] - Date.now() < 0) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//       return;
//     }
//     refs.btnStart.disabled = false;
//     refs.btnStart.addEventListener('click', () => {
//       const timerId = setInterval(() => {
//         const deltaTime = selectedDates[0] - Date.now();
//         if (deltaTime < 1000) {
//           clearInterval(timerId);
//         }
//         const timeData = convertMs(deltaTime);
//         const keys = Object.keys(timeData);
//         for (const key of keys) {
//           const timerRef = document.querySelector(`span[data-${key}]`);
//           timerRef.textContent = timeData[key];
//         }
//       }, 1000);
//       refs.btnStart.disabled = true;
//     });
//   },
// };
// flatpickr(refs.input, options);
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(
//     Math.floor((((ms % day) % hour) % minute) / second)
//   );
//   return { days, hours, minutes, seconds };
// }
// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }

// // import flatpickr from 'flatpickr';
// // import 'flatpickr/dist/flatpickr.min.css';
// // import Notiflix from 'notiflix';

// // const { startBtn, ouputDays, ouputHours, ouputMinutes, ouputSeconds } = {
// //   startBtn: document.querySelector('[data-start]'),
// //   ouputDays: document.querySelector('[data-days]'),
// //   ouputHours: document.querySelector('[data-hours]'),
// //   ouputMinutes: document.querySelector('[data-minutes]'),
// //   ouputSeconds: document.querySelector('[data-seconds]'),
// // };

// // let timerId = null;
// // let timeToDate = null;
// // let time = {};
// // let isClicked = false;

// // const options = {
// //   enableTime: true,
// //   time_24hr: true,
// //   defaultDate: new Date(),
// //   minuteIncrement: 1,
// //   onClose(selectedDates) {
// //     timeToDate = selectedDates[0].getTime();
// //     if (timeToDate > Date.now()) {
// //       startBtn.removeAttribute('disabled');
// //     } else {
// //       setAtrrDisabled();
// //       Notiflix.Notify.failure('Please choose a date in the future');
// //     }

// //
// //   },
// // };

// // setAtrrDisabled();
// // flatpickr('#datetime-picker', options);

// // startBtn.addEventListener('click', onClickStart);

// // function setAtrrDisabled() {
// //   startBtn.setAttribute('disabled', true);
// // }

// // function onClickStart() {
// //   if (isClicked) {
// //     return;
// //   }
// //   isClicked = true;
// //   timerId = setInterval(() => {
// //     const deltaTime = timeToDate - Date.now();
// //     if (deltaTime < 1000) {
// //       clearInterval(timerId);
// //       setAtrrDisabled();
// //       isClicked = false;
// //       Notiflix.Notify.success('The time has come!');
// //     }
// //     time = convertMs(deltaTime);
// //     setTimer();
// //   }, 1000);
// // }

// // function setTimer() {
// //   ouputDays.textContent = addLeadingZero(time.days);
// //   ouputHours.textContent = addLeadingZero(time.hours);
// //   ouputMinutes.textContent = addLeadingZero(time.minutes);
// //   ouputSeconds.textContent = addLeadingZero(time.seconds);
// // }

// // function addLeadingZero(value) {
// //   return value.toString().padStart(2, [0]);
// // }

// // function convertMs(ms) {
// //   const second = 1000;
// //   const minute = second * 60;
// //   const hour = minute * 60;
// //   const day = hour * 24;

// //   const days = Math.floor(ms / day);
// //   const hours = Math.floor((ms % day) / hour);
// //   const minutes = Math.floor(((ms % day) % hour) / minute);
// //   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

// //   return { days, hours, minutes, seconds };
// // }
