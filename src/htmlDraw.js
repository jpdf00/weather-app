import getData from './weather.js';
import getGIF from './animation.js';

const API_WEATHER = '2316fb2f745c7ff1232b9e52f05b2491';
const API_GIPHY = '3X2ApJT7aNnInzDc4ImBbzZLzv0UNSGA&s';

function drawWeather(data, units) {
  let u = '';
  if (units === 'metric') {
    u = '° C';
  } else if (units === 'imperial') {
    u = '° F';
  } else {
    u = ' K';
  }

  const card = document.createElement('div');
  card.setAttribute('class', 'card mb-3 shadow border-0');

  const row = document.createElement('div');
  row.setAttribute('class', 'row g-0 bg-white rounded pb-1');

  const location = document.createElement('h2');
  location.setAttribute('class', 'rounded p-1 text-white text-center card-title align-self-center bg-gradient bg-secondary');
  location.textContent = `${data.name}, ${data.sys.country}`;

  const col1 = document.createElement('div');
  col1.setAttribute('class', 'col-4 d-flex justify-content-center');

  const col2 = document.createElement('div');
  col2.setAttribute('class', 'col-4 d-flex justify-content-center');

  const col3 = document.createElement('div');
  col3.setAttribute('class', 'col-4 d-flex justify-content-center');

  const cardBody1 = document.createElement('div');
  cardBody1.setAttribute('class', 'card-body p-0');

  const cardBody2 = document.createElement('div');
  cardBody2.setAttribute('class', 'card-body p-0');

  const cardBody3 = document.createElement('div');
  cardBody3.setAttribute('class', 'card-body p-0');

  const tempTitle = document.createElement('p');
  tempTitle.setAttribute('class', 'card-text m-0 text-center');

  const tempTitleSmall = document.createElement('small');
  tempTitleSmall.setAttribute('class', 'text-muted');
  tempTitleSmall.textContent = 'Current:';

  const temp = document.createElement('p');
  temp.setAttribute('class', 'text-center fs-2 m-0 fw-bold align-middle mt-3');
  temp.textContent = `${data.main.temp}${u}`;

  const tempMaxTitle = document.createElement('p');
  tempMaxTitle.setAttribute('class', 'card-text m-0 text-center');

  const tempMaxTitleSmall = document.createElement('small');
  tempMaxTitleSmall.setAttribute('class', 'text-muted');
  tempMaxTitleSmall.textContent = 'Maximum:';

  const tempMax = document.createElement('p');
  tempMax.setAttribute('class', 'card-text m-0 text-center fs-5');
  tempMax.textContent = `${data.main.temp_max}${u}`;

  const tempMinTitle = document.createElement('p');
  tempMinTitle.setAttribute('class', 'card-text m-0 text-center');

  const tempMinTitleSmall = document.createElement('small');
  tempMinTitleSmall.setAttribute('class', 'text-muted');
  tempMinTitleSmall.textContent = 'Minimum:';

  const tempMin = document.createElement('p');
  tempMin.setAttribute('class', 'card-text m-0 text-center fs-5');
  tempMin.textContent = `${data.main.temp_min}${u}`;

  const tempFeelTitle = document.createElement('p');
  tempFeelTitle.setAttribute('class', 'card-text m-0 text-center');

  const tempFeelTitleSmall = document.createElement('small');
  tempFeelTitleSmall.setAttribute('class', 'text-muted');
  tempFeelTitleSmall.textContent = 'Feel Like:';

  const tempFeel = document.createElement('p');
  tempFeel.setAttribute('class', 'card-text m-0 text-center fs-5');
  tempFeel.textContent = `${data.main.feels_like}${u}`;

  const humidityTitle = document.createElement('p');
  humidityTitle.setAttribute('class', 'card-text m-0 text-center');

  const humidityTitleSmall = document.createElement('small');
  humidityTitleSmall.setAttribute('class', 'text-muted');
  humidityTitleSmall.textContent = 'Humidity:';

  const humidity = document.createElement('p');
  humidity.setAttribute('class', 'card-text m-0 text-center fs-5');
  humidity.textContent = `${data.main.humidity} %`;

  tempTitle.appendChild(tempTitleSmall);
  cardBody1.appendChild(tempTitle);
  cardBody1.appendChild(temp);

  tempMaxTitle.appendChild(tempMaxTitleSmall);
  cardBody2.appendChild(tempMaxTitle);
  cardBody2.appendChild(tempMax);

  tempMinTitle.appendChild(tempMinTitleSmall);
  cardBody2.appendChild(tempMinTitle);
  cardBody2.appendChild(tempMin);

  tempFeelTitle.appendChild(tempFeelTitleSmall);
  cardBody3.appendChild(tempFeelTitle);
  cardBody3.appendChild(tempFeel);

  humidityTitle.appendChild(humidityTitleSmall);
  cardBody3.appendChild(humidityTitle);
  cardBody3.appendChild(humidity);

  col1.appendChild(cardBody1);
  col2.appendChild(cardBody2);
  col3.appendChild(cardBody3);

  row.appendChild(location);
  row.appendChild(col1);
  row.appendChild(col2);
  row.appendChild(col3);

  card.appendChild(row);

  return card;
}

function drawHome(city, units, token = true) {
  const content = document.querySelector('#content');
  const location = city;
  const locationURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_WEATHER}&units=${units}`;

  getData(locationURL)
    .then((value) => {
      if (token) {
        content.removeChild(content.lastChild);
      }
      const inputLocation = document.querySelector('#inputLocation');
      const img = document.querySelector('#weatherImg');
      const icon = document.querySelector('#weatherIcon');
      const figTitle = document.querySelector('#figTitle');
      const figDescription = document.querySelector('#figDescription');
      const figCaption = document.querySelector('#figCaption');
      const iconCode = value.weather[0].icon;
      const weatherMain = value.weather[0].main;
      const weatherDescription = value.weather[0].description;
      let weatherImg = '../assets/img/weather-'
      let weatherCaption = ''
      content.appendChild(drawWeather(value, units));
      inputLocation.value = '';
      icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      figTitle.textContent = weatherMain;
      figDescription.textContent = weatherDescription;
      switch (iconCode) {
        case '01d':
          weatherImg += '01d.jpg';
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@bencollins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Collins</a> on <a class="text-white" href="https://unsplash.com/s/photos/clear-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '01n':
          weatherImg += '01n.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@raimondklavins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Raimond Klavins</a> on <a class="text-white" href="https://unsplash.com/s/photos/clear-sky-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '02d':
          weatherImg += '02d.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@simonfitall?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Simon Fitall</a> on <a class="text-white" href="https://unsplash.com/s/photos/few-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '02n':
          weatherImg += '02n.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@hyunwonjang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hyunwon Jang</a> on <a class="text-white" href="https://unsplash.com/s/photos/clouds-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '03d':
          weatherImg += '03d.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@ortodummie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Peter Žagar</a> on <a class="text-white" href="https://unsplash.com/s/photos/few-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '03n':
          weatherImg += '03n.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@martinjernberg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Martin Jernberg</a> on <a class="text-white" href="https://unsplash.com/s/photos/few-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '04d':
          weatherImg += '04d.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@jplenio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Johannes Plenio</a> on <a class="text-white" href="https://unsplash.com/s/photos/few-clouds?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '04n':
          weatherImg += '04n.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@craighiron?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Craig Hiron</a> on <a class="text-white" href="https://unsplash.com/s/photos/clouds-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '09d':
          weatherImg += '09d.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@isaac_keem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Andrew Kim</a> on <a class="text-white" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '09n':
          weatherImg += '09n.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@eutahm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eutah Mizushima</a> on <a class="text-white" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '10d':
          weatherImg += '10d.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@abingol?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Atilla Bingöl</a> on <a class="text-white" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '10n':
          weatherImg += '10n.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@nardly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel Bernard</a> on <a class="text-white" href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '11d':
        case '11n':
          weatherImg += '11.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@paniscusbcn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Josep Castells</a> on <a class="text-white" href="https://unsplash.com/s/photos/clouds-night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '13d':
        case '13n':
          weatherImg += '13.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@heathermedwards?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Heather M. Edwards</a> on <a class="text-white" href="https://unsplash.com/s/photos/storm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        case '50d':
        case '50n':
          weatherImg += '50.jpg'
          weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@dmtrdon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dimitar Donovski</a> on <a class="text-white" href="https://unsplash.com/s/photos/mist?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
          break;
        default:
        weatherImg += '01d.jpg';
        weatherCaption = 'Photo by <a class="text-white" href="https://unsplash.com/@bencollins?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ben Collins</a> on <a class="text-white" href="https://unsplash.com/s/photos/clear-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
        break;
      }
      img.src = weatherImg;
      figCaption.innerHTML = weatherCaption;


      /*const weather = `${weatherMain.toLowerCase().split(' ').join('-')}-${weatherDescription.toLowerCase().split(' ').join('-')}`;
      const animationURL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_GIPHY}&s=${weather}`;
      getGIF(animationURL)
        .then((response) => {
          img.src = response.data.images.original.url;
        });*/
    })
    .catch((err) => {
      content.textContent = `${err.message}`;
    });
}

export default drawHome;
