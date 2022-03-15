import axios from "axios";
import express from "express";
import cors from "cors";

const WEATHER_KEY = "3F3APL3XMWVSVFH7L62P5KNFD"; //process.env.WEATHER_KEY;
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.get("/", (_req, res) => {
  res.send("server running");
});

app.post("/weather", (req, _res) => {
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${req.body.latitude},${req.body.longitude}?key=${WEATHER_KEY}`;
  axios({
    url: url,
    responseType: "json",
  }).then((data) => data.data.currently);
});

app.listen(3001, () => {
  console.log("node server is running");
});
