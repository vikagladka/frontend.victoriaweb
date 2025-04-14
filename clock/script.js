const hr = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function dispalyTime(){
  let date = new Date();
  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  let hourRotate = 30 * hours + seconds / 2;
  let minRotate = 6 * minutes;
  let secRotate = 6 * seconds;
  
  hr.style.transform = `rotate(${hourRotate}deg)`;
  min.style.transform = `rotate(${minRotate}deg)`;
  sec.style.transform = `rotate(${secRotate}deg)`;
}

setInterval(dispalyTime, 1000);