function timer() {
  let sec = 0;
  let timer = setInterval(function () {
    document.querySelector(".timerDisplay").innerHTML = "00:" + sec;
    sec++;
    if (sec > 20) {
      clearInterval(timer);
    }
  }, 1000);
}
window.onload = function () {
  timer();
};
