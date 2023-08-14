const clockDisplay = document.querySelector(".clock");
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const resetButton = document.querySelector(".reset");
const lapButton = document.querySelector(".lap");
const lap = document.querySelector(".lap-times");
let count = 0;
let startTime;
let intervalId;
let time;

function updateClock() {
  const currentTime = new Date().getTime();
  const elapsedTime = currentTime - startTime;
  const minutes = Math.floor(elapsedTime / 60000);
  const seconds = Math.floor((elapsedTime % 60000) / 1000);
  const milliseconds = Math.floor((elapsedTime % 1000) / 100);
  time = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  clockDisplay.textContent = time;
}

lapButton.addEventListener("click", function () {
  if (startTime) {
    count++;
    lap.innerHTML += `${count} -> ${time}<br>`;
  }
});

startButton.addEventListener("click", function () {
  if (!startTime) {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startTime = new Date().getTime() - (time ? convertToMilliseconds(time) : 0);
    intervalId = setInterval(updateClock, 100);
  }
});
function convertToMilliseconds(timeString) {
  const [minutes, seconds, milliseconds] = timeString.split(/[::]/).map(Number);
  return minutes * 60000 + seconds * 1000 + milliseconds * 100;
}

stopButton.addEventListener("click", function () {
  clearInterval(intervalId);
  startTime = undefined;
  stopButton.disabled = true;
  startButton.disabled = false;
  resetButton.disabled = false;
});

resetButton.addEventListener("click", function () {
  clearInterval(intervalId);
  startTime = undefined;
  clockDisplay.textContent = "00:00:00";
  stopButton.disabled = true;
  lap.innerHTML = "Laps<br>";
  count = 0;
});
