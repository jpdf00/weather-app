import getData from './weather';
import getGIF from './animation';

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
      const iconCode = value.weather[0].icon;
      const inputLocation = document.querySelector('#inputLocation');
      const weatherMain = value.weather[0].main;
      const weatherDescription = value.weather[0].description;
      const weather = `${weatherMain.toLowerCase().split(' ').join('-')}-${weatherDescription.toLowerCase().split(' ').join('-')}`;
      const animationURL = `https://api.giphy.com/v1/gifs/translate?api_key=${API_GIPHY}&s=${weather}`;
      content.appendChild(drawWeather(value, units));
      inputLocation.value = '';
      getGIF(animationURL)
        .then((response) => {
          const img = document.querySelector('#weatherImg');
          const icon = document.querySelector('#weatherIcon');
          const figTitle = document.querySelector('#figTitle');
          const figDescription = document.querySelector('#figDescription');
          figTitle.textContent = weatherMain;
          figDescription.textContent = weatherDescription;
          img.src = response.data.images.original.url;
          icon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        });
    })
    .catch((err) => {
      content.textContent = `${err.message}`;
    });
}

export default drawHome;
