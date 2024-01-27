async function currentWeather () {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7690fee7c1dd410aac5235034242401&q=auto:ip`, {mode: 'cors'});
    const result = await response.json();
    return result // <-- this is a promise
}

const weatherPromise = currentWeather();
const dailyForecast = document.querySelector('.information-sqaure');
const background = document.querySelector('.main');

const conditionPromise = weatherPromise.then(value => value.current.condition);
let temperaturePromise = weatherPromise.then(value => temperaturePromise = value.current.temp_c);
let cityNamePromise = weatherPromise.then(value => cityNamePromise = value.location.name);
const dayOrNight = weatherPromise.then(value => value.current.is_day);

Promise.all([conditionPromise, temperaturePromise, cityNamePromise, dayOrNight])
    .then(([condition, temperature, city, timeOfDay]) => {
        if (timeOfDay == 0) {
            background.style.backgroundImage = 'url(images/wp2437939-ultrawide-wallpapers.png)';      
        } else {
            background.style.backgroundImage = 'url(images/pexels-photo-3938169.png)'
        }
        extractCondition(condition);
    });


function extractTemp(property) {
    const currentTemp = document.createElement('div')
}

function extractCondition(property) {
    const weatherIcon = document.createElement('img');
    const weatherCondition = document.createElement('span');

    weatherIcon.setAttribute('class', 'icon');

    weatherIcon.src = property.icon;
    weatherCondition.textContent = property.text;
    dailyForecast.appendChild(weatherIcon);
    dailyForecast.appendChild(weatherCondition);
}