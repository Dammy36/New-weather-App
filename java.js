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

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let humidity = Math.round(response.data.main.humidity);
  let wind = Math.round(response.data.wind.speed);
  let city = response.data.name;
  let description = response.data.weather[0].description;
  let weatherIcon = response.data.weather[0].icon;

  document.querySelector("#temperature").innerHTML = `${temperature}`;
  document.querySelector("#city").innerHTML = `${city}`;
  document.querySelector("#humidity").innerHTML = `${humidity}`;
  document.querySelector("#wind").innerHTML = `${wind}`;
  document.querySelector("#description").innerHTML = `${description}`;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
  );
}
function search(city) {
  let apiKey = "dfade740b7c139f8be2d4b268ca337e7";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#country");
  search(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

search("New York");

function displayForecast() {
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

displayForecast();
