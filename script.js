
var APIKey = "a4af8bd3c9453f28d775a17a4db79327";
//var city = $(this).attr("citysearch");
//var city = document.getElementById("citysearch").value;
//can't get the either of the above code to work so I'm just hard coding Denver for the time being
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + "Denver" + "&units=imperial&appid=" + APIKey;
var lat = 51.51;
var lon = -0.13;
var queryURLUV = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
var fullDate = new Date()
var queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + "Denver" +"&units=imperial&appid=" + APIKey;

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
            $(".card-title").text(fullDate);


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
            //this could use a for loop to get the array of temps

            $("#temp1").text("Temperature (F) " + response.list[0].main.temp);
            $("#hum1").text("Humidity: " + response.list[0].main.humidity);

            console.log("Temperature: " + response.list[0].main.temp);
            console.log("Humidity: " + response.list[0].main.humidity);

        });
}







