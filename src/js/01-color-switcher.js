const { startBtn, stopBtn, buttons } = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
let timerId = null;

startBtn.addEventListener('click', onClickStart);
stopBtn.addEventListener('click', onClickStop);

function onClickStart() {
  toggleBtnDisableStatus();
  timerId = setInterval(() => {
    const bodyBgColor = getRandomHexColor();
    document.body.style.backgroundColor = bodyBgColor;
  }, 1000);
}

function onClickStop() {
  toggleBtnDisableStatus();
  document.body.removeAttribute('style');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function toggleBtnDisableStatus() {
  startBtn.toggleAttribute('disabled');
}
