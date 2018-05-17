$(document).ready(function() { 

    $.getJSON("https://ipapi.co/json/", function(location) {
        
        let lat = location.latitude;
        let long = location.longitude;
        let city = location.city.toUpperCase();
        let regionCode = location.region_code.toUpperCase();
        $("#city").html(`${city}, ${regionCode}`);

        var proxy = 'https://cors-anywhere.herokuapp.com/';
        var apiLinkDS = `https://api.darksky.net/forecast/77b95339d73c3b6ccc2df9cfb4d8ab56/${lat},${long}`;
  
        $.ajax({
            url: proxy + apiLinkDS,
            success:function(darkSky) { 

                //JSON call for Open Weather API
                let weatherDescription = darkSky.minutely.summary.toUpperCase();
                let currentTemp = darkSky.currently.temperature.toFixed(0);
                let currentApparentTemp = darkSky.currently.apparentTemperature.toFixed(0);
                let dailyLowTemp = darkSky.daily.data[0].temperatureLow.toFixed(0);
                let dailyHighTemp = darkSky.daily.data[0].temperatureHigh.toFixed(0);
                

                $("#weatherType").html(weatherDescription);
                $("#currentTemp").html(currentTemp + "°");
                $("#currentApparentTemp").html("FEELS LIKE " + currentApparentTemp + "°");
                $("#dailyLowTemp").html(dailyLowTemp + "°");
                $("#dailyHighTemp").html(dailyHighTemp + "°");
            
            }
        }); 
         
    })

});

// /*Weather icons: clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, 
// partly-cloudy-day, partly-cloudy-night, hail, thunderstorm, or tornado