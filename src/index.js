import { drawWeather, drawHome } from './htmlDraw.js';

const btnSearch = document.querySelector('#btnSearch');
const inputLocation = document.querySelector('#inputLocation');

drawHome('London')

btnSearch.addEventListener('click', () => {
  drawHome(inputLocation.value);
});
