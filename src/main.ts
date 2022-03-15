const log = console.log;

import { GeocoderAutocomplete } from '@geoapify/geocoder-autocomplete';
const geoKey:string = 'ba21a0d4fde441b1a9dceb2df1ead4f1' //process.env.GEO_KEY || '';

const autocomplete = new GeocoderAutocomplete(document.getElementById("autocomplete") as HTMLElement, geoKey, 
                        { type:'city' });
let latitude:number | null = 0;
let longitude:number | null = 0;

autocomplete.on('select', (location) => {
  if(location === null) return ;
  // log('log:',location)
  latitude = location.geometry.coordinates[0][0][0]
  longitude = location.geometry.coordinates[0][0][1]

// log('latitude', latitude)
// log('longitude',longitude)
fetch('/weather', {
  method: 'POST',
  headers:{
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    latitude:latitude,
    longitude:longitude
  })
}).then(res => res.json()).then(data =>{
  log(data)
  // setWeatherData(data, place.formatted_address)
})
});
// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Washington,DC?key=
// autocomplete.on('suggestions', (suggestions) => {
//     // process suggestions here
// });