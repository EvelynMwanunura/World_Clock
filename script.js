function updateParisTime() {
  let parisDateElement = document.getElementById("paris-date");
  let parisTimeElement = document.getElementById("paris-time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
updateParisTime();
setInterval(updateParisTime, 1000);

function updateTokyoTime() {
  let tokyoDateElement = document.getElementById("tokyo-date");
  let tokyoTimeElement = document.getElementById("tokyo-time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM	Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTokyoTime();
setInterval(updateTokyoTime, 1000);

document.querySelector("#city-dropdown").addEventListener("change", updateCity);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone) {
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities");

    function updateCityTime() {
      let cityTime = moment().tz(cityTimeZone);
      citiesElement.innerHTML = `
        <div class="cities">
         <div class="city"> <div class="cityandtime">
            <h2>${cityName}</h2>
            <p class="date">${cityTime.format("MMMM Do YYYY")}</p>
          </div>
          <div class="time">
          <p class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</p>
          </div>
        </div>
        </div>
      `;
    }

    updateCityTime();
    clearInterval(window.cityInterval);
    window.cityInterval = setInterval(updateCityTime, 1000);
  }
}
