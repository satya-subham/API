var cityInput = document.querySelector(".cityName");
var btn1 = document.querySelector(".submitButton");

btn1.addEventListener("click", function (name) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=eea12d5fa383f1ce6361b62b932ec60c`
  )
    .then((response) => response.json())
    .then((data) => {
      cityInput.value = "";
      let result = `<div class="weather_info">
            <h1>City : ${data.name}</h1> 
             <h1>Temp = ${Math.floor(data["main"].temp - 273)} °C</h1>
             <h1> Pressure = ${data["main"].pressure} </h1>
             <h1> Humidity = ${data["main"].humidity} </h1>
             <div class="weather_clouds">
             <i class="fa-solid fa-cloud"></i>
             <i class="fa-solid fa-cloud"></i>
             <i class="fa-solid fa-cloud"></i> <br>
             <i class="fa-solid fa-cloud"></i>
             <i class="fa-solid fa-cloud"></i>
             </div>
             </div>`;

      let container = document.querySelector(".container");
      container.innerHTML += result;
      console.log(data);
    })
    .catch((err) => alert("invalid city name"));
});

// GET WEATHER USING LONGITUDE AND LATITUDE

let longInput = document.querySelector(".long");
let latInput = document.querySelector(".lat");
let enterBtn = document.querySelector(".enter");
let container = document.querySelector(".container");

enterBtn.addEventListener("click", (event) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latInput.value}&lon=${longInput.value}&appid=eea12d5fa383f1ce6361b62b932ec60c`
  )
    .then((response) => response.json())
    .then((data) => {
      longInput.value = "";
      latInput.value = "";
      container.innerHTML += `<div class="weather_info">
        <h1>City : ${data.name}</h1> 
         <h1>Temp = ${Math.floor(data["main"].temp - 273)} °C</h1>
         <h1> Pressure = ${data["main"].pressure} </h1>
         <h1> Humidity = ${data["main"].humidity} </h1>
         <div class="weather_clouds">
         <i class="fa-solid fa-cloud"></i>
         <i class="fa-solid fa-cloud"></i>
         <i class="fa-solid fa-cloud"></i> <br>
         <i class="fa-solid fa-cloud"></i>
         <i class="fa-solid fa-cloud"></i>
         </div>
         </div>`;
      console.log(data);
    })
    .catch((err) => alert("invalid longitude or latitude"));
});
