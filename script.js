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
