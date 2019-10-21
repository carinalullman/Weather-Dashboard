var APIKey = "a4af8bd3c9453f28d775a17a4db79327";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=Denver&units=imperial&appid=" + APIKey;
var lat = 37;
var lon = -67;
var queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;

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
            $(".temp").text("Temperature (F) " + response.main.temp);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".wind").text("Wind Speed: " + response.wind.speed);




            // Log the data in the console as well
            console.log("Wind Speed: " + response.wind.speed);
            console.log("Humidity: " + response.main.humidity);
            console.log("Temperature (F): " + response.main.temp);
        });

    $.ajax({
        url: queryURLUV,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURLUV);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".UV").html("UV Index: " + response.value);

            //UV Index$(".")
        });


}

