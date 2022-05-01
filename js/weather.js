const API_KEY = "56106207e77287a62ebd02914132910a";

function onSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
            city.innerText = data.name;
        });
}

function onFailure() {
    alert("Can't find location!");
}

navigator.geolocation.getCurrentPosition(onSuccess, onFailure);
