const log = console.log;

import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

// const locationElement = document.querySelector('[data-location]') as HTMLElement;
// const statusElement = document.querySelector('[data-status]') as HTMLElement;
const temperatureElement = document.querySelector('[data-temperature]') as HTMLElement;
const tempMaxElement = document.querySelector('[data-tempMax]') as HTMLElement;
const tempMinElement = document.querySelector('[data-tempMin]') as HTMLElement;
const precipitationElement = document.querySelector('[data-percipitation]') as HTMLElement;
const windElement = document.querySelector('[data-wind]') as HTMLElement;
const descriptionElement = document.querySelector('[data-description]') as HTMLElement;

const GEO_KEY = "ba21a0d4fde441b1a9dceb2df1ead4f1" || ""; //process.env.GEO_KEY//

function setWeatherData(data:any){ //, place: string) {
  // locationElement.textContent = place;
  temperatureElement.textContent = data.temp;
  tempMaxElement.textContent = data.tempmax; // weather status from API
  tempMinElement.textContent = data.tempmin; // weather status from API
  precipitationElement.textContent = data.precipprob;  //`${data.precipProbability * 100}%`
  windElement.textContent = data.windspeed;
  descriptionElement.textContent = data.description;
}


const autocomplete = new GeocoderAutocomplete(
  document.getElementById("autocomplete") as HTMLElement,
  GEO_KEY,
  { type: "city" }
);
let latitude: number | null = 0;
let longitude: number | null = 0;

autocomplete.on("select", (location) => {
  if (location === null) return;
  longitude = location.geometry.coordinates[0][0][0];
  latitude = location.geometry.coordinates[0][0][1];

  const data = {
    lat: latitude,
    lon: longitude,
  };

  log("latitude", latitude);
  log("longitude", longitude);

  sendPost(data);
});

async function sendPost(data: any) {
  log(data);
  await fetch("http://localhost:3001/weather", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    setWeatherData(data) // update interface values
  })
  .catch((error) => {
    console.error('Err:', error);
  });

}
