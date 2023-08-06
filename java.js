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
  return `${month}  ${day}  ${hour} : ${minutes}`;
}

currentWeather = document.querySelector("#current-date");
currentWeather.innerHTML = currentTime(now);

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let wind = Math.round(response.data.wind.speed);
  let name = response.data.name;

  document.querySelector("#temperature").innerHTML = `${temperature}`;
  document.querySelector("#city").innerHTML = `${name}`;
  document.querySelector("#humidity").innerHTML = `${humidity}`;
  document.querySelector("#wind").innerHTML = `${wind}`;
}

let apiKey = "dfade740b7c139f8be2d4b268ca337e7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=dfade740b7c139f8be2d4b268ca337e7&units=metric`;

axios.get(apiUrl).then(showTemperature);

function handleSubmit(event) {
  event.preventDefault();
  let location = document.querySelector("country").value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("click", handleSubmit);
