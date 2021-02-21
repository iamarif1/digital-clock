const hours = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const progress = document.getElementById("progress");

function showCurrentTime() {
  let setDate = new Date();
  let hr = setDate.getHours();
  let min = setDate.getMinutes();
  let sec = setDate.getSeconds();

  hours.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;
  progress.style.width = (sec / 60) * 100 + '%';
}
setInterval(showCurrentTime, 1000);
