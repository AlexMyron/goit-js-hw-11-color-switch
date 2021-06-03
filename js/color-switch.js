const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action = "start"]'),
  stopBtn: document.querySelector('button[data-action = "stop"]'),
  bodyEl: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onClickIntervalStart);
refs.stopBtn.addEventListener('click', onClickIntervalStop);

let startProcess = null;
let isActive = true;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function colorSwitch() {
  refs.bodyEl.style.backgroundColor =
    colors[randomIntegerFromInterval(1, colors.length)];
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
