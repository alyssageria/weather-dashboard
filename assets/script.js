//variables
var searchButton = $('.search-btn');
var forecastDiv = $('.forecast-city');
var cityInput = $('.city-input');
var localStorageArray = loadLocalStorage();

var currentDay = dayjs().format('M/D/YYYY');

var day1 = dayjs().add(1, 'day').format('M/D/YYYY');
var day2 = dayjs().add(2, 'day').format('M/D/YYYY');
var day3 = dayjs().add(3, 'day').format('M/D/YYYY');
var day4 = dayjs().add(4, 'day').format('M/D/YYYY');
var day5 = dayjs().add(5, 'day').format('M/D/YYYY');



//fetch the API for the city
function getApi(city) {
    if (!city) {
        alert('Please enter a city name');
        return;
    }
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

//displays the current weather
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

//displays the following 5 days forecast
function displayWeather2(data2) {
    console.log(data2);

    //divs
    var boxDiv2 = $("<div>").addClass("card-div");
    var cardTitle2 = $("<h3>").addClass("card-title");
    var titleDiv = $("<div>").addClass("title-div")
    var boxDiv = $("<div>").addClass("box-div");
    //icons for each day
    var icon1 = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data2.list[8].weather[0].icon}@2x.png`);
    var icon2 = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data2.list[16].weather[0].icon}@2x.png`);
    var icon3 = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data2.list[24].weather[0].icon}@2x.png`);
    var icon4 = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data2.list[32].weather[0].icon}@2x.png`);
    var icon5 = $("<img>").attr("src", `http://openweathermap.org/img/wn/${data2.list[39].weather[0].icon}@2x.png`);
    $(icon1).width(50);
    $(icon1).height(50);
    $(icon2).width(50);
    $(icon2).height(50);
    $(icon3).width(50);
    $(icon3).height(50);
    $(icon4).width(50);
    $(icon4).height(50);
    $(icon5).width(50);
    $(icon5).height(50);


    //variables with box text
    var boxInfo1 = $("<p>").addClass("box-info");
    var boxInfo2 = $("<p>").addClass("box-info");
    var boxInfo3 = $("<p>").addClass("box-info");
    var boxInfo4 = $("<p>").addClass("box-info");
    var boxInfo5 = $("<p>").addClass("box-info");

    //variables for the boxes
    var forecastBox1 = $("<div>").addClass("box");
    var forecastBox2 = $("<div>").addClass("box");
    var forecastBox3 = $("<div>").addClass("box");
    var forecastBox4 = $("<div>").addClass("box");
    var forecastBox5 = $("<div>").addClass("box");

    //temp/wind/humidity
    var temp1 = Math.round(data2.list[8].main.temp);
    var wind1 = data2.list[8].wind.speed;
    var humidity1 = Math.round(data2.list[8].main.humidity);
    var temp2 = Math.round(data2.list[16].main.temp);
    var wind2 = data2.list[16].wind.speed;
    var humidity2 = Math.round(data2.list[16].main.humidity);
    var temp3 = Math.round(data2.list[24].main.temp);
    var wind3 = data2.list[24].wind.speed;
    var humidity3 = Math.round(data2.list[24].main.humidity);
    var temp4 = Math.round(data2.list[32].main.temp);
    var wind4 = data2.list[32].wind.speed;
    var humidity4 = Math.round(data2.list[32].main.humidity);
    var temp5 = Math.round(data2.list[39].main.temp);
    var wind5 = data2.list[39].wind.speed;
    var humidity5 = Math.round(data2.list[39].main.humidity);


    $(".visibility").show();
    $(".title-div").append(cardTitle2.append("5 Day Forecast: "));
    $(".new-div").append(boxDiv2).append(forecastBox1.append(boxInfo1.append(day1).append(icon1)));
    $(".new-div").append(boxDiv2).append(forecastBox2.append(boxInfo2.append(day2).append(icon2)));
    $(".new-div").append(boxDiv2).append(forecastBox3.append(boxInfo3.append(day3).append(icon3)));
    $(".new-div").append(boxDiv2).append(forecastBox4.append(boxInfo4.append(day4).append(icon4)));
    $(".new-div").append(boxDiv2).append(forecastBox5.append(boxInfo5.append(day5).append(icon5)));

    $(boxInfo1).append("Temp: " + temp1 + "°F" + "<br>" + "Wind: " + wind1 + " MPH" + "<br>" + "Humidity: " + humidity1 + "%");
    $(boxInfo2).append("Temp: " + temp2 + "°F" + "<br>" + "Wind: " + wind2 + " MPH" + "<br>" + "Humidity: " + humidity2 + "%");
    $(boxInfo3).append("Temp: " + temp3 + "°F" + "<br>" + "Wind: " + wind3 + " MPH" + "<br>" + "Humidity: " + humidity3 + "%");
    $(boxInfo4).append("Temp: " + temp4 + "°F" + "<br>" + "Wind: " + wind4 + " MPH" + "<br>" + "Humidity: " + humidity4 + "%");
    $(boxInfo5).append("Temp: " + temp5 + "°F" + "<br>" + "Wind: " + wind5 + " MPH" + "<br>" + "Humidity: " + humidity5 + "%");

}


//event listener
$('#search').click(function () {
    var city = $(".city-input").val().trim();
    var words = city.split(" ");
    var formattedCity = "";

    //capitalizes every first letter in each word
    for (var i = 0; i < words.length; i++) {
        var word = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        formattedCity += word + " ";
    }

    formattedCity = formattedCity.trim();

    //if nothing is input, it will alert them to put in a city. else, it will run the functions to get the weather
    if (formattedCity === "") {
        alert("Please Input a City");
    } else {
        getApi(formattedCity);
        localStorageArray.push(formattedCity);
        savelocalStorage(localStorageArray);
        buttonHistory();
    }
})

//creating my array for local storage
function loadLocalStorage() {
    var localStorageArray = JSON.parse(localStorage.getItem('cities searched')) || [];

    return localStorageArray;
}

//saves to local storage
function savelocalStorage(array) {
    localStorage.setItem('cities searched', JSON.stringify(array));
}

function buttonHistory() {
    var historyButton = $("<button>").addClass("history-btn");

    for (var i = 0; i < localStorageArray.length; i++) {
        if (localStorageArray) {
            $(".buttons").append(historyButton.append(localStorageArray[i]));
        }
    }
}