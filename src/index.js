import { getWeather } from './weather';

const API = '2316fb2f745c7ff1232b9e52f05b2491';
let city = 'london,us'
let locationURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;

const weather = document.createElement('p');
const content = document.querySelector('#content');

getWeather(locationURL)
.then(function(value) {
  console.log(value)
  weather.textContent = JSON.stringify(value);
  content.appendChild(weather);
})
.catch(function(err) {
  weather.textContent = JSON.stringify('This is not the weather you are looking for!');
  content.appendChild(weather);
});
