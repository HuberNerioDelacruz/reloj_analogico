const $second = document.getElementById('second');
const $minute = document.getElementById('minute');
const $hour = document.getElementById('hour');


setInterval(()=>{
  const time = new Date();
  let hours = time.getHours() % 12;
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let angleSeconds = seconds * 6;
  let angleMinutes = (minutes * 6) + (angleSeconds / 60);
  let angleHours = (hours * 30) + ((angleMinutes / 360) * 30);
  
  $second.style.transform = `rotate(${angleSeconds}deg)`;
  $second.style.transformOrigin = 'bottom';
  
  $minute.style.transform = `rotate(${angleMinutes}deg)`;
  $minute.style.transformOrigin = 'bottom';

  $hour.style.transform = `rotate(${angleHours}deg)`;
  $hour.style.transformOrigin = 'bottom';

}, 1000);
