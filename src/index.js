
import updateDOM, {
  searchForm, checkCity, errorMessage, selectImage,
} from './modules/dom';
import parseJSON from './modules/parsejson';

const apiKey = '034b1e6439b4af8304cfb5a8734b6e14';
searchForm.addEventListener('submit', event => {
  event.preventDefault();


  let data = {};
  const currentCity = checkCity.value;
  const metricURL = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=metric`;
  const fehrenhitURL = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=imperial`;
  fetch(metricURL, { mode: 'cors' })
    .then(response => response.json())
    .then(json => parseJSON(json))
    .then(dataMetric => { data = dataMetric; })
    .then(() => fetch(fehrenhitURL))
    .then(response => response.json())
    .then(json => parseJSON(json))
    .then(dataImperial => dataImperial.temp)
    .then(tempF => updateDOM(data, tempF))
    .catch(() => {
      errorMessage.textContent = 'I Couldn\'t fetch weather for this city 😩.';
    });
  errorMessage.textContent = '';
  searchForm.reset();
  checkCity.focus();
  selectImage(currentCity);
});
