let now = new Date();
function currentTime(now) {
  let days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  let day = days[now.getDay()];
  let months = [
    "January",
    "Febuary",
    "Match",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let minutes = now.getMinutes();
  if (hour < 10) {
    hour = `0${minutes}`;
  }
  return `${month} ${day} ${hour} : ${minutes}`;
}
currentWeather = document.querySelector("#current-date");
currentWeather.innerHTML = currentTime(now);
