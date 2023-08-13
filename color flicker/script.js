let intervalId;
let changebt = document.querySelector(".change");
let colourcode = document.querySelector(".colourcode");
let intervalInput = document.getElementById("intervalInput"); // New line

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOMContentLoaded event fired");

  changebt.addEventListener("click", startColorChange);
  document.querySelector(".stop").addEventListener("click", stopColorChange);
});

function startColorChange() {
  console.log("Change button clicked");
  const intervalTime = parseInt(intervalInput.value) * 1000; // Convert seconds to milliseconds
  intervalId = setInterval(change, intervalTime);
  changebt.disabled = true;
}

function stopColorChange() {
  console.log("Stop button clicked");
  clearInterval(intervalId);
  changebt.disabled = false;
}

function change() {
  let col = generateRandomColor();
  colourcode.innerHTML = col;
 document.querySelector(".container").style.backgroundColor=col;
//   document.querySelector("body").style.backgroundColor = col;
}

function generateRandomColor() {
  const hexChars = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }

  return color;
}
