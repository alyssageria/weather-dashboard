//variables
var searchButton = $('.search-btn');
var forecastDiv = $('.forecast-city');
var cityInput = $('.city-input');
var currentDay = dayjs().format('M/D/YYYY');


// $(".visibility").hide();
//fetch the API for the city
function getApi(city) {
    var openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=f4cf2123039124c240525b2f1d0e4cb3`;
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=f4cf2123039124c240525b2f1d0e4cb3`;
    fetch(openWeatherUrl).then(function (response) {
        return response.json();
    }).then(function (data) {
        displayWeather(data);
    })

    fetch(forecastUrl).then(function (response) {
        return response.json();
    }).then(function (data2) {
        displayWeather2(data2);
    })
}

function displayWeather(data) {
    console.log(data);
    var cardDiv = $("<div>").addClass("card");
    var cardTitle = $("<h3>").addClass("card-title").text(data.name);
    var cardInfo = $("<h4>").addClass("card-info");
    var icon = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    var temp = data.main.temp;
    var wind = data.wind.speed;
    var humidity = data.main.humidity;
    $(".current-city").append(cardDiv.append(cardTitle.append(" " + currentDay).append(icon)));
    $(".current-city").append(cardDiv.append(cardInfo.append("Temp: " + Math.round(temp) + "°F" + "<br>")));
    $(".current-city").append(cardDiv.append(cardInfo.append("Wind: " + (wind) + " MPH" + "<br>")));
    $(".current-city").append(cardDiv.append(cardInfo.append("Humidity: " + Math.round(humidity) + "%" + "<br>")));

    var cardDiv2 = $("<div>").addClass("card");
    var cardTitle2 = $("<h3>").addClass("card-title").text(data)
}

function displayWeather2(data2) {
    console.log(data2);
    var boxDiv2 = $("<div>").addClass("div2");
    var cardTitle2 = $("<h3>").addClass("card-title");
    var titleDiv = $("<div>").addClass("title-div")
    var boxDiv = $("<div>").addClass("box-div");
    var boxInfo1 = $("<p>").addClass("box-info");
    var boxInfo2 = $("<p>").addClass("box-info");
    var boxInfo3 = $("<p>").addClass("box-info");
    var boxInfo4 = $("<p>").addClass("box-info");
    var boxInfo5 = $("<p>").addClass("box-info");
    var forecastBox1 = $("<div>").addClass("box");
    var forecastBox2 = $("<div>").addClass("box");
    var forecastBox3 = $("<div>").addClass("box");
    var forecastBox4 = $("<div>").addClass("box");
    var forecastBox5 = $("<div>").addClass("box");
    var temp2 = Math.round(data2.list[1].main.temp);
    var wind2 = data2.list[1].wind.speed;
    var humidity2 = Math.round(data2.list[1].main.humidity);

    // $(".visibility").show();
    $(".forecast").append(titleDiv.append(cardTitle2.append("5 Day Forecast: ")));
    $(".forecast").append(boxDiv2).append(forecastBox1.append(boxInfo1.append("test")));
    $(".forecast").append(boxDiv2).append(forecastBox2.append(boxInfo2.append("test")));
    $(".forecast").append(boxDiv2).append(forecastBox3.append(boxInfo3.append("test")));
    $(".forecast").append(boxDiv2).append(forecastBox4.append(boxInfo4.append("test")));
    $(".forecast").append(boxDiv2).append(forecastBox5.append(boxInfo5.append("test")));
}

$('#search').click(function () {
    // $(".visibility").show();
    var city = $(".city-input").val().trim();
    getApi(city);
    setLocalStorage();
})

function setLocalStorage() {
    var searchHistory = $(".city-input").val();
    var chosenCity = $(".search").val();
    localStorage.setItem(chosenCity, searchHistory);
}


