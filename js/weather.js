
function onGeoOk(position){
    /*
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    
    fetch(url).then(response => response.json()).then(data =>{
        const citySpan = document.querySelector("#weather span:first-child");
        const weatherSpan = document.querySelector("#weather span:last-child");
        citySpan.innerText = `${data.name}`;
        weatherSpan.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}℃`;
    });
     */
    //need [const API_KEY = "";] 
    //If you have the API_KEY, please delete the comment above and the code below.
    //↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    const citySpan = document.querySelector("#weather span:first-child");
    const weatherSpan = document.querySelector("#weather span:last-child");
    citySpan.innerText = "city";
    weatherSpan.innerText = `weather / 999℃`;
    //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);