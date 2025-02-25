const start = document.querySelector(".start");
const container = document.querySelector("container");
const circle = document.querySelector(".circle");
start.addEventListener("click", function () {
  circle.style.backgroundColor = "hsl(314, 23%, 52%)";
  start.style.backgroundColor = "hsl(314, 23%, 52%)";
  start.style.color = "black";
  function timer() {
    let sec = 0;
    let timer = setInterval(function () {
      document.querySelector(".timerDisplay").innerHTML = "00:" + sec;
      sec++;
      if (sec > 59) {
        clearInterval(timer);
      }
    }, 1000);
  }
  timer();
});
