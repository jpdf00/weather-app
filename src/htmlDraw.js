import { getWeather } from './weather';

const API = '2316fb2f745c7ff1232b9e52f05b2491';

function drawWeather(data) {
  const forecast = document.createElement('ul');
  const temp = document.createElement('li');
  temp.textContent = data.main.temp;

  const tempMax = document.createElement('li');
  tempMax.textContent = data.main.temp_max;

  const tempMin = document.createElement('li');
  tempMin.textContent = data.main.temp_min;

  const tempFeel = document.createElement('li');
  tempFeel.textContent = data.main.feels_like;

  const humidity = document.createElement('li');
  humidity.textContent = data.main.humidity;

  forecast.appendChild(temp);
  forecast.appendChild(tempMax);
  forecast.appendChild(tempMin);
  forecast.appendChild(tempFeel);
  forecast.appendChild(humidity);

  return forecast;
}

function drawHome(city) {
  const content = document.querySelector('#content');
  const weather = document.createElement('p');
  const location = city;
  const locationURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API}`;
  getWeather(locationURL)
  .then(function(value) {
    content.appendChild(drawWeather(value));
  })
  .catch(function(err) {
    weather.textContent = 'This is not the location you are looking for!';
    content.appendChild(weather);
  });
  inputLocation.value = "";
}


export { drawWeather, drawHome };
