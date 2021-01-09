import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon";


export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false)
  const [forecast, setForecast] = useState(null)
function handleForecastResponse(response) {
  setForecast(response.data);
  setLoaded(true);
  

}

if (loaded) {

  return (
  <div className="WeatherForecast">
    <WeatherIcon code={forecast.list[0].weather[0].icon} />
  {Math.round(forecast.list[0].main.temp)}°C
  </div>
  
  );
} else {
  let apiKey = "2c01c84d2f25936279dc3368bd18575f";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleForecastResponse);

  return null;
}
}
