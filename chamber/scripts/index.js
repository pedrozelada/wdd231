
// to display current weather
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

async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data); 
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(data) {
    temp.innerHTML = `<b>${data.main.temp}&deg;C</b>`;
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
  apiFetch(url);
//convert the unixformat into time
  function formatTimeFromUnix(unixTime) {
    const date = new Date(unixTime * 1000);
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2); 
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const formattedTime = hours + ':' + minutes + ' ' + ampm;
    return formattedTime;
}

// to display 3 days
const tod = document.querySelector('#todayc');
const tom = document.querySelector('#tomorrowc');
const atom = document.querySelector('#atomorrowc');

const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=-21.53&lon=-64.73&units=metric&appid=7a754ba18991783a33af01dad98985b9';

//get days
let todaydate = new Date();
let tomorrow= new Date();
tomorrow.setDate(todaydate.getDate() + 1);
let aftertomorrow = new Date();
aftertomorrow.setDate(todaydate.getDate() + 2);

let format = { weekday: 'long' };
let daytomorrow = tomorrow.toLocaleDateString('en-US', format);
let dayaftertomorrow = aftertomorrow.toLocaleDateString('en-US', format);

async function apiFetch2(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults2(data); 
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function displayResults2(data) {
  tod.innerHTML = `Today <b>${data.list[0].main.temp}&deg;C</b>`;
  tom.innerHTML = `${daytomorrow} <b>${data.list[1].main.temp}&deg;C</b>`;
  atom.innerHTML = `${dayaftertomorrow} <b>${data.list[2].main.temp}&deg;C</b>`;
}
apiFetch2(url2);

//display gold or silver members

// generate random number
const generateRandomNumber = () => Math.floor(Math.random() * 10);
let numbers = [];
let count = 0;
// get three members
const url3 = 'https://pedrozelada.github.io/wdd231/chamber/data/members.json';

const getCompaniesData = async (url) => {
  try {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  while(count <= 2) {
    let randomIndex = generateRandomNumber();
    let memberNumber = data.companies[randomIndex];
    console.log(memberNumber);
    let memberNumbermembersip = memberNumber.membershiplevel;
      if ( (memberNumbermembersip == 2 || memberNumbermembersip == 3) && !numbers.includes(randomIndex) ){
        numbers.push(randomIndex);
      }
      count ++;
    }
    console.log("Miembros seleccionados:", numbers);
  } catch (error) {
    console.log(error);
  }
}
getCompaniesData(url3);
