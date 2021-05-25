const formweather = document.querySelector(".weather__form");
const formweatherInput = document.querySelector(".weather__form-input");
const weatherInfo = document.querySelector(".weather__info");
const API_KEY = "b66231541ed49ec99156074c91eca30f";

const getweather = async (value) => {
  try {
    const cityName = value[0].toUpperCase() + value.split("").slice(1).join("");
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=ru&units=metric`;
    weatherInfo.innerHTML = `<span>Загрузка...</span>`
    const response = await fetch(url);
    const data = await response.json();
    addElements(data, cityName);
    localStorage.setItem("city", cityName);
  } catch (err) {
    weatherInfo.innerHTML = "Город не определен";
  }
};

const addElements = async ({ main, weather }, cityName) => {
  const icon = await `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
  weatherInfo.innerHTML = `
        <p class="weather__info-temp">Погода в <br>${cityName} ${main.temp} <span> &#176;</span></p>
        <p class="weather__info-desc">${weather[0].description}</p>
        <img  class="weather-icon" src="${icon}"></img>`;
};

formweather.addEventListener("submit", (event) => {
  event.preventDefault();
  getweather(formweatherInput.value);
});

window.addEventListener("load", () => {
  if (localStorage.getItem("city")) {
    getweather(localStorage.getItem("city"));
  } else {
    getweather("самара");
  }
});
