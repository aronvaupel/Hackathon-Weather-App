const log = console.log;

import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
const GEO_KEY = "a7242c3efe674cc5842fca4734ee575f" || ""; //process.env.GEO_KEY//

const autocomplete = new GeocoderAutocomplete(
  document.getElementById("autocomplete") as HTMLElement,
  GEO_KEY,
  { type: "city" }
);
let latitude: number | null = 0;
let longitude: number | null = 0;

autocomplete.on("select", (location) => {
  if (location === null) return;
  latitude = location.geometry.coordinates[0][0][0];
  longitude = location.geometry.coordinates[0][0][1];

  log("latitude", latitude);
  log("longitude", longitude);
  fetch("http://localhost:3001/weather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      latitude: latitude,
      longitude: longitude,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      log(data);
      // setWeatherData(data, place.formatted_address);
    });
});
