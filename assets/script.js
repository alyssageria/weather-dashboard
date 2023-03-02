//variables
var searchButton = $('.search-btn');

//fetch the API for the city
async function getApi() {
    var openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Anaheim&APPID=f4cf2123039124c240525b2f1d0e4cb3`;
    var fiveDayForecast = `https://api.openweathermap.org/data/2.5/forecast?q=Anaheim&appid=f4cf2123039124c240525b2f1d0e4cb3`
    var response = await fetch(openWeatherUrl);
    var data = await response.json();
    var res = await fetch(fiveDayForecast);
    var dat = await res.json();
    var temp = data.main.temp;
    var farenheit = convert(temp);
    var humidity = data.main.humidity;
    var wind = data.wind.speed;
    var fiveDay = [];
    console.log(dat);
    console.log(wind);
    // console.log(data);
    for (i = 0; i < 5; i++) {
        var con = convert(dat.list[i].main.temp);
        var humid = dat.list[i].main.humidity;
        var windSpeed = dat.list[i].wind.speed;
    }
}

function convert(kelvin) {
    let convertedTemp = ((kelvin - 273.15) * 9) / 5 + 32;
    convertedTemp = Math.round(convertedTemp);
    return convertedTemp;
}

getApi();
//event listener for search button when searching a city
//make the divs on the right hidden and visible when search but is clicked

