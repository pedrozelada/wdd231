const temp = document.querySelector('#current-temp');
const desc = document.querySelector('#description-temp');
const max = document.querySelector('#max-temp');
const min = document.querySelector('#min-temp');
const hum = document.querySelector('#humidity-temp');
const sunr = document.querySelector('#sunrise');
const suns = document.querySelector('#sunset');

const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-21.53&lon=-64.73&units=metric&appid=7a754ba18991783a33af01dad98985b9';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(data) {
    temp.innerHTML = `${data.main.temp}&deg;C`;
    desc.innerHTML = data.weather[0].description;
    max.innerHTML = `High: ${data.main.temp_max}&deg;`;
    min.innerHTML = `Low: ${data.main.temp_min}&deg;`;
    hum.innerHTML = `Humidity: ${data.main.humidity}%`;
    sunr.innerHTML = `Sunrise: ${formatTimeFromUnix(data.sys.sunrise)}`;
    suns.innerHTML = `Sunset: ${formatTimeFromUnix(data.sys.sunset)}`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].main);
    
  }
  apiFetch();



  function formatTimeFromUnix(unixTime) {
    // Crear un objeto Date basado en el tiempo Unix (en milisegundos)
    const date = new Date(unixTime * 1000);

    // Obtener horas y minutos en formato de 12 horas
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2); // Asegura que los minutos siempre tengan dos dígitos

    // Determinar si es AM o PM
    const ampm = hours >= 12 ? 'pm' : 'am';

    // Convertir horas de 24 a 12 horas
    hours = hours % 12;
    hours = hours ? hours : 12; // Si hours es 0, se convierte a 12

    // Construir la cadena de tiempo en formato deseado
    const formattedTime = hours + ':' + minutes + ' ' + ampm;

    return formattedTime;
}
