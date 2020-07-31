

"use strict";
var NewFunction = function(lat, lon){
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHERMAP_KEY,
        lat: lat,
        lon: lon,
        units: "imperial"
    }).done(function(data) {
        updateWeatherCard(data);
    });
}
let updateWeatherCard= function(data){
    $("#cards").html("")
console.log(data);
for( var i = 0; i < 5 ; i++){
    // Assign the pretty Date String to #weather-date
    let date = new Date(data.daily[i].dt * 1000);
    console.log(date);

    let MaxTemp = data.daily[i].temp.max;
    let MinTemp = data.daily[i].temp.min;
    var highToLowTemp = MinTemp + '°F / ' + MaxTemp + '°F'
    console.log(highToLowTemp);

    let description = data.daily[i].weather[0].description;
    console.log(description);
    let icon =  data.daily[i].weather[0].icon;
    let humidity= data.daily[i].humidity;
    console.log(humidity);

    let wind = data.daily[i].wind_speed;
    console.log(wind);

    let pressure = data.daily[i].pressure;
    console.log(pressure);

    $("#cards").append(
        '<div class="card" style="width: 14rem;">' +
            '<div class="card-header">' + date.toDateString()  + '</div>'
            + '<ul class="list-group list-group-flush">'
                + '<li class="list-group-item">' + highToLowTemp +'<br>'+ "<img src='https://openweathermap.org/img/w/" + icon + ".png'" + 'class="d-flex justify-content-center">'+ '</li>'
                + '<li class="list-group-item">' + "Description: " +"<br>" + description + '<br>' + 'Humidity: ' + humidity + '</li>'
                + '<li class="list-group-item">' + 'Wind: ' + wind + '</li>'
                + '<li class="list-group-item">' + 'Pressure: ' + pressure + '</li>'
            +'</ul>'
        +'</div>'
    )
}
}

mapboxgl.accessToken = mapboxKey;
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    zoom: 10,
    center: [-98.4951, 29.4246]
});
var marker = new mapboxgl.Marker({
    draggable: true
});

marker.setLngLat(mapboxgl.LngLat.convert([-98.4951, 29.4246]));
marker.addTo(map);

function onDragEnd() {
    var lngLat = marker.getLngLat();
    NewFunction(lngLat.lat,lngLat.lng);
}

map.on("load",onDragEnd);
marker.on("dragend", onDragEnd);