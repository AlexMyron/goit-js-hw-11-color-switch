import colors from './colors.js';
import refs from './get-refs.js';

refs.startBtn.addEventListener('click', onClickIntervalStart);
refs.stopBtn.addEventListener('click', onClickIntervalStop);

let startProcess = null;
let isActive = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorSwitch() {
  refs.bodyEl.style.backgroundColor =
    colors[randomIntegerFromInterval(1, colors.length - 1)];
}

function onClickIntervalStart() {
  if (isActive) {
    startProcess = setInterval(() => {
      colorSwitch();
    }, 1000);

    isActive = false;
  }
}

function onClickIntervalStop() {
  if (!isActive) {
    clearInterval(startProcess);
    isActive = true;
  }
}
