const API_key=`703870b946d10e8b34ac7fc37d550916`;
//const API = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${API_key}`;
const form = document.querySelector("form");
const weather = document.querySelector("#weather");
const search = document.querySelector("#search");

const getWeather = async(city) => {
    weather.innerHTML = `<h2>Loading...</h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    const response =await fetch(url);
    console.log(response);
    const data = await response.json();
    return showWeather(data)

}

const showWeather = (data) => {

    if(data.cod == 404){
        weather.innerHTML = `<h2>${data.message}</h2>`
        return
    }

    else{
        console.log(data)
        weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather icon" />
        </div>    
        <div class="data">
            <h2>${data.main.temp}ºC</h2>
            <h3>${data.weather[0].main}</h3>
        </div>
        `
    }
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();//stops the reload
    }
)