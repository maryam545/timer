const start = document.querySelector(".start");
const container = document.querySelector("container");
const circle = document.querySelector(".circle");
let input = document.querySelector(".input");
const timerDisplay = document.querySelector(".timerDisplay");
start.addEventListener("click", function () {
  let inputValue = parseInt(input.value);
  if (isNaN(inputValue) || inputValue <= 0) {
    circle.style.backgroundColor = "hsl(0, 100.00%, 26.70%)";
    alert("Enter Your Number");
    return;
  }

  circle.style.backgroundColor = "hsl(314, 23%, 52%)";
  start.style.backgroundColor = "hsl(314, 23%, 52%)";
  start.style.color = "black";
  function timer() {
    let timer = setInterval(function () {
      if (inputValue <= 0) {
        timerDisplay.innerHTML = "00:00";
        clearInterval(timer);
        return;
      }
      timerDisplay.innerHTML = `00:${
        inputValue < 10 ? "0" + inputValue : inputValue
      }`;
      inputValue--;
    }, 1000);
  }
  timer();
});
