import { drawWeather, drawHome } from './htmlDraw.js';

const btnSearch = document.querySelector('#btnSearch');
const inputLocation = document.querySelector('#inputLocation');
const selectUnits = document.querySelector('#selectUnits');

drawHome('London,uk', 'metric', false)

btnSearch.addEventListener('click', () => {
  drawHome(inputLocation.value, 'imperial');
});

selectUnits.addEventListener('change', () => {
  drawHome('London,uk', selectUnits.value)
});
