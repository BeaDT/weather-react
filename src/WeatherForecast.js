import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastPreview from "./WeatherForcastPreview";



export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false)
  const [forecast, setForecast] = useState(null)
function handleForecastResponse(response) {
  setForecast(response.data);
  setLoaded(true);
  

}

if (loaded && props.city === forecast.city.name) {

  return (
    
  <div className="WeatherForecast row">
      <WeatherForecastPreview data={forecast.list[0]} />
      <WeatherForecastPreview data={forecast.list[1]} />
      <WeatherForecastPreview data={forecast.list[2]} />
      <WeatherForecastPreview data={forecast.list[3]} />
      <WeatherForecastPreview data={forecast.list[4]} />
  </div>
  
  );
} else {
  let apiKey = "2c01c84d2f25936279dc3368bd18575f";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleForecastResponse);

  return null;
}
}
