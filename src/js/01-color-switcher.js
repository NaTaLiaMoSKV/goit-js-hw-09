const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerId;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick(e) {
    e.currentTarget.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval( () => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
}

function onStopBtnClick(e) {
    startBtn.disabled = false;
    e.currentTarget.disabled = true;
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
