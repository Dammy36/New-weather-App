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

  return `${month} ${day}  ${hour} : ${minutes}`;
}

currentWeather = document.querySelector("#current-date");
currentWeather.innerHTML = currentTime(now);

function displayForecast(response) {
  console.log(response.data.data);
  let forecastElement = document.querySelector("#forecast");

  let forcastHTML = `<ul>`;
  let dayss = ["MON", "TUE", "WED", "THU", "FRI"];
  dayss.forEach(function (day) {
    forcastHTML =
      forcastHTML +
      ` 
 <li class="Weather-details"> ${day}
 <span class="weather-forecast-max">
 18° <span class="weather-forecast-min">20°</span></span
 <span> ☀️</span>
 </li>
`;
  });

  forcastHTML = forcastHTML + `</ul>`;
  forecastElement.innerHTML = forcastHTML;
}

function getForecast(coordinates) {
  let apiKey = "ft2ff28777530dba3dddb311o0464bef";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${coordinates.longitude}&lat=${coordinates.latitude}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function showTemperature(response) {
  celsiusTemperature = response.data.temperature.current;
  let temperature = Math.round(celsiusTemperature);
  let humidity = Math.round(response.data.temperature.humidity);
  let wind = Math.round(response.data.wind.speed);
  let city = response.data.city;
  let description = response.data.condition.description;
  let weatherIcon = response.data.condition.icon;
  document.querySelector("#temperature").innerHTML = `${temperature}`;
  document.querySelector("#city").innerHTML = `${city}`;
  document.querySelector("#humidity").innerHTML = `${humidity}`;
  document.querySelector("#wind").innerHTML = `${wind}`;
  document.querySelector("#description").innerHTML = `${description}`;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${weatherIcon}.png`
  );

  getForecast(response.data.coordinates);
}
function search(city) {
  let apiKey = "ft2ff28777530dba3dddb311o0464bef";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#country");
  search(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function displayCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(celsiusTemperature);
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", displayCelsius);

function displayFahrenheit(event) {
  event.preventDefault();
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(fahrenheitTemp);
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheit);

let celsiusTemperature = null;
search("Nigeria");
