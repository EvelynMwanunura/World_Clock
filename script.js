function updateParisTime() {
  let parisDateElement = document.getElementById("paris-date");
  let parisTimeElement = document.getElementById("paris-time");
  let parisTime = moment().tz("Europe/Paris");
  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
updateParisTime();
setInterval(updateParisTime, 1000);

function updateTokyoTime() {
  let tokyoDateElement = document.getElementById("tokyo-date");
  let tokyoTimeElement = document.getElementById("tokyo-time");
  let tokyoTime = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTokyoTime();
setInterval(updateTokyoTime, 1000);

function updateDublinTime() {
  let dublinDateElement = document.getElementById("dublin-date");
  let dublinTimeElement = document.getElementById("dublin-time");
  let dublinTime = moment().tz("Europe/Dublin");
  dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateDublinTime();
setInterval(updateDublinTime, 1000);

function updateNairobiTime() {
  let nairobiDateElement = document.getElementById("nairobi-date");
  let nairobiTimeElement = document.getElementById("nairobi-time");
  let nairobiTime = moment().tz("Africa/Nairobi");
  nairobiDateElement.innerHTML = nairobiTime.format("MMMM Do YYYY");
  nairobiTimeElement.innerHTML = nairobiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateNairobiTime();
setInterval(updateNairobiTime, 1000);

document.querySelector("#city-dropdown").addEventListener("change", updateCity);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");

  function updateCityTime() {
    let cityTime = moment().tz(cityTimeZone);
    citiesElement.innerHTML = `
      <div class="cities">
        <div class="city">
          <div class="cityandtime">
            <h2>${cityName}</h2>
            <p class="date">${cityTime.format("MMMM Do YYYY")}</p>
          </div>
          <div class="time">
            <p class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format("A")}</small></p>
          </div>
        </div>
        <a class="all-cities-link" href="index.html">all cities</a>
      </div>
    `;
  }

  updateCityTime();
  clearInterval(window.cityInterval);
  window.cityInterval = setInterval(updateCityTime, 1000);
}
