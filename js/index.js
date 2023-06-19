const clock = document.querySelector(".clock");

const h = document.querySelectorAll(".h");
const m = document.querySelectorAll(".m");
const s = document.querySelectorAll(".s");
const txt = document.querySelector(".txt");
function runClock() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let text = "AM";
  if (hours > 12) {
    hours = hours - 12;
    text = "PM";
  } else if (hours == 0) {
    hours = 12;
    text = "PM";
  }
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  hours = hours.toString();
  minutes = minutes.toString();
  seconds = seconds.toString();
  h[0].innerHTML = hours[0];
  h[1].innerHTML = hours[1];
  m[0].innerHTML = minutes[0];
  m[1].innerHTML = minutes[1];
  s[0].innerHTML = seconds[0];
  s[1].innerHTML = seconds[1];
  txt.innerHTML = text;
}
runClock()
setInterval(runClock, 1000);
