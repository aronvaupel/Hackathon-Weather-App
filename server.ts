const log = console.log;
import axios from "axios";
import express from "express";
import cors from "cors";

const WEATHER_KEY = "MS48M24PRXNCA6CYBA855WX8E"; //process.env.WEATHER_KEY;
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.get("/", (_req, res) => {
  res.send("server running");
});

<<<<<<< HEAD:src/server.ts
let results:any = '';
const resultsObj = {
  tempmax: 0,
  tempmin:0,
  temp:0,
  precipprob:0,
  conditions:'',
  windspeed:0,
  description:'',
  icon:''
}
=======
let results = "";

>>>>>>> 3b890f4fd873177095414c23874214255b3fc06f:server.ts
app.post("/weather", async (req, _res) => {
  log("response", req.body);
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${req.body.lat},${req.body.lon}?key=${WEATHER_KEY}`;
<<<<<<< HEAD:src/server.ts
//  log('url: ', url)
 await axios.get(url)
 .then((data:any) => {
  //  log('temp: ', data.data.currentConditions.temp)
   results = data.data;

  }).catch((err)=>log('ERR: ', err))
 
// log('tempmax: ',results.days[0].tempmax) 
// log('tempmin: ',results.days[0].tempmin) 
resultsObj.temp = results.currentConditions.temp;
resultsObj.tempmax = results.days[0].tempmax;
resultsObj.tempmin = results.days[0].tempmin;
resultsObj.precipprob = results.days[0].humidity;
resultsObj.conditions = results.currentConditions.conditions;
resultsObj.windspeed = results.currentConditions.windspeed;
resultsObj.description = results.description;
resultsObj.icon = results.currentConditions.icon;
log('resultsObj[Server]: ', resultsObj);
_res.send(resultsObj);
=======
  //  log('url: ', url)
  await axios
    .get(url)
    .then((data: any) => {
      log("temp: ", data.data.currentConditions.temp);
      results = data.data;
    })
    .catch((err) => log("ERR: ", err));

  log("tempmax: ", results.days[0].tempmax);
  log("tempmin: ", results.days[0].tempmin);
>>>>>>> 3b890f4fd873177095414c23874214255b3fc06f:server.ts
});

app.listen(3001, () => {
  console.log("node server is running");
});
