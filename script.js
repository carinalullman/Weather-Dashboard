
var APIKey = "a4af8bd3c9453f28d775a17a4db79327";
//var city = $(this).attr("citysearch");
//var city = document.getElementById("citysearch").value;
//can't get the either of the above code to work so I'm just hard coding Denver for the time being
var lat = 51.51;
var lon = -0.13;
//don't hard code the lon & lat but works for now
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "Denver" + "&units=imperial&appid=" + APIKey;
var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
var queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + "Denver" + "&units=imperial&appid=" + APIKey;

var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];
console.log(n);

//need a loop to iterate through the days of the week for the five day forecast

document.getElementById("btn").addEventListener("click", query);

function query() {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            //date
            $(".temp").text("Temperature (F): " + response.main.temp);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $("#day").text(n);

            $(".card-title1").text(n);
            $(".card-title2").text(n);
            $(".card-title3").text(n);
            $(".card-title4").text(n);
            $(".card-title5").text(n);


            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);
        });


    $.ajax({
        url: queryURLUV,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURLUV);
            console.log(response);
            $(".UV").html("UV Index: " + response.value);

        });

    $.ajax({
        url: queryURLFive,
        method: "GET"
    })

        .then(function (response) {
            console.log(queryURLFive);
            console.log(response);
            //Need to update the date to be incremental and change format
            //this could use a for loop to get the array of temps/humidity

            $("#temp1").text("Temperature (F): " + response.list[0].main.temp);
            $("#hum1").text("Humidity: " + response.list[0].main.humidity);

            $("#temp2").text("Temperature (F): " + response.list[1].main.temp);
            $("#hum2").text("Humidity: " + response.list[1].main.humidity);

            $("#temp3").text("Temperature (F): " + response.list[2].main.temp);
            $("#hum3").text("Humidity: " + response.list[2].main.humidity);

            $("#temp4").text("Temperature (F): " + response.list[3].main.temp);
            $("#hum4").text("Humidity: " + response.list[3].main.humidity);

            $("#temp5").text("Temperature (F): " + response.list[4].main.temp);
            $("#hum5").text("Humidity: " + response.list[4].main.humidity);

            console.log("Temperature: " + response.list[0].main.temp);
            console.log("Humidity: " + response.list[0].main.humidity);

        });
}







