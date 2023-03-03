//variables
var searchButton = $('.search-btn');
var forecastDiv = $('.forecast-city');
var cityInput = $('.city-input');
var currentDay = dayjs().format('M/D/YYYY');

//fetch the API for the city
function getApi(city) {
    var openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=f4cf2123039124c240525b2f1d0e4cb3`;
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&=imperial&appid=f4cf2123039124c240525b2f1d0e4cb3`;
    fetch(openWeatherUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        displayWeather(data);
    })
    console.log(openWeatherUrl);

}

function displayWeather(data) {
    console.log(data);
    var cardDiv = $("<div>").addClass("card");
    var cardTitle = $("<h3>").addClass("card-title").text(data.name);
    var ulEl = $("<ul>").addClass("current-weather");
    var liEl = $("<li>").addClass("list-item");
    var icon = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    var temp = data.main.temp;
    var wind = data.wind.speed;
    var humidity = data.main.humidity;
    console.log(humidity);
    $(".current-city").append(cardDiv.append(cardTitle.append(icon)));
    $(".current-city").append(cardDiv.append("Temp: " + Math.round(temp) + "°F"));
    $(".current-city").append(cardDiv.append("Wind: " + (wind) + " MPH"));
    $(".current-city").append(cardDiv.append("Humidity: " + Math.round(humidity) + "%"));
}

$('#search').click(function () {
    var city = $(".city-input").val().trim();
    getApi(city);
})


