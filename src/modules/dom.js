export const searchForm = document.querySelector('.control');
export const checkCity = document.getElementById('cityInput');
export const errorMessage = document.getElementById('warn');

const weatherImg = document.querySelector('.icon');
const desc = document.querySelector('.weather-status');
const currTemp = document.querySelector('.main-temp');
const currCity = document.querySelectorAll('.location>span');
const moreAbt = document.querySelectorAll('.more-info > p');
const displayCity = document.getElementById('weather-forecast');
const currDate = document.querySelector('.date');
const c = document.getElementById('switchF');
const d = document.getElementById('degrees');

export default (data, tempF = null) => {
  const list = document.createElement('li');
  list.classList.add('city');
  currCity[0].innerHTML = data.name;
  currCity[1].innerHTML = data.country;
  currDate.innerHTML = new Date();
  currTemp.innerHTML = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(
    data.temp,
  )}°C`;
  weatherImg.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  desc.innerHTML = data.description;
  let currTempF = false;
  const toggleTempF = (el, cc, tempInfo) => {
    const cel = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(
      tempInfo,
    )}°C`;
    const elTempF = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(
      tempF,
    )}°F`;
    if (currTempF) {
      cc.innerHTML = cel;
      el.innerHTML = 'Switch to °F';
      currTempF = false;
    } else {
      cc.innerHTML = elTempF;
      el.innerHTML = 'Switch to °C';
      currTempF = true;
    }
  };
  moreAbt[0].innerHTML = `
  <span class='b-feel'>Feels Like</span>
  ${Math.round(data.feelsLike)}°C
  `;
  moreAbt[1].innerHTML = `
  <i class='fa fa-temperature-high'></i>
  <span class='b-feel'>Max temp</span>${Math.round(
    data.tempMax,
  )}°C, <i class='fa fa-temperature-low'></i>
  <span class='b-feel'>Min temp</span>${Math.round(data.tempMin)}°C
  `;
  d.style.display = 'block';
  d.addEventListener('click', () => {
    toggleTempF(d, c, data.temp);
  });
  displayCity.className = 'show';
};

export const selectImage = (cityName) => {
  const script = document.createElement('script');
  script.src = `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=abc&tags=${cityName}`;
  document.head.appendChild(script);
  window.abc = function abc(data) {
    const body = document.querySelector('body');
    body.style.background = `url('${data.items[3].media.m}') no-repeat`;
    body.style.backgroundSize = 'cover';
  };
};
