const API_KEY = "3171a239c6d52e216130715d94a3cbb6"


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:nth-child(2)")
        const temp = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = data.main.temp;
    });
}
function onGeoError(){
    alert("Can't find your location")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)