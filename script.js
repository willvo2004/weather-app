async function currentWeather () {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=7690fee7c1dd410aac5235034242401&q=auto:ip`, {mode: 'cors'});
    const result = await response.json();
    console.log(result); //current.temp_c
}

currentWeather();