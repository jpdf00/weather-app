import drawHome from './htmlDraw';

let location = 'London,uk';
let units = 'metric';

if (!localStorage.getItem('location')) {
  localStorage.setItem('location', 'London,uk');
} else {
  location = localStorage.getItem('location');
}

if (!localStorage.getItem('units')) {
  localStorage.setItem('units', 'metric');
} else {
  units = localStorage.getItem('units');
}


const btnSearch = document.querySelector('#btnSearch');
const inputLocation = document.querySelector('#inputLocation');
const selectUnits = document.querySelector('#selectUnits');

drawHome(location, units, false);

btnSearch.addEventListener('click', () => {
  location = inputLocation.value;
  localStorage.setItem('location', location);
  drawHome(localStorage.getItem('location'), localStorage.getItem('units'));
});

selectUnits.addEventListener('change', () => {
  units = selectUnits.value;
  localStorage.setItem('units', units);
  drawHome(location, localStorage.getItem('units'));
});
