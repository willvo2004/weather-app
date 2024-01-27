async function currentWeather () {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7690fee7c1dd410aac5235034242401&q=auto:ip`, {mode: 'cors'});
    const result = await response.json();
    return result // <-- this is a promise
}

const weatherPromise = currentWeather();
const dailyForecast = document.querySelector('.information-sqaure');
const background = document.querySelector('.main');

let conditionPromise = weatherPromise.then(value => value.current.condition);
let temperaturePromise = weatherPromise.then(value => temperaturePromise = value.current.temp_c);
let cityNamePromise = weatherPromise.then(value => cityNamePromise = value.location.name);
let dayOrNight = weatherPromise.then(value => value.current.is_day);

Promise.all([conditionPromise, temperaturePromise, cityNamePromise, dayOrNight])
    .then(([condition, temperature, city, timeOfDay]) => {
        if (timeOfDay == 0) {
            background.style.backgroundImage = 'url(images/jason-blackeye-FzURx0rFhUk-unsplash.jpg)';      
        } else {
            background.style.backgroundImage = 'url(images/69049064459__17BD0792-59D0-4A27-BAF7-04555825E165.jpg)'
        }
        extractIcon(condition);
    });


function extractTemp(property) {
    const currentTemp = document.createElement('div')
}

function extractIcon(property) {
    const weatherIcon = document.createElement('img');
    weatherIcon.setAttribute('class', 'icon');

    weatherIcon.src = property.icon;
    dailyForecast.appendChild(weatherIcon);
}