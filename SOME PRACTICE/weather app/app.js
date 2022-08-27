const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".container");

button.addEventListener("click", (event) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=eea12d5fa383f1ce6361b62b932ec60c`
  )
    .then((response) => response.json())
    .then((data) => {
      container.innerHTML = `<div class="cloud">
        <i class="fa-solid fa-cloud"></i>
        <i class="fa-solid fa-cloud"></i>
        <i class="fa-solid fa-cloud"></i><br>
        <i class="fa-solid fa-cloud"></i>
        <i class="fa-solid fa-cloud"></i>
    </div>
    <h1>Temp : ${Math.floor(data["main"].temp - 273)} °C</h1>
    <h1>City : ${data.name}</h1>
    <div class="pressure">
    <h2>Pressure : ${data["main"].pressure} <i class="fa-solid fa-temperature-half"></i></h2>
    </div>
    <div class="humidity">
    <h2> Humidity : ${data["main"].humidity} <i class="fa-solid fa-temperature-three-quarters"></i></h2>
    </div>`;
    })
    .catch((err) => alert("Invalid City"));
});
