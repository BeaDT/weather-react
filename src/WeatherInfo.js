import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";



export default function WeatherInfo(props) {
  return (
    <div className="WeatherName">
          <div className="top-left-info">
          <div className="current-city">
            <h1 id="chosen-city">{props.data.city}</h1>
          </div>

          <div className="first-left-line">
            <hr />
          </div>

          <div className="current-weather-info">
            <p>
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                className="main-icon"
              />
              <span className="text-capitalize">{props.data.description} </span>
             <span><WeatherTemperature celsius={props.data.temperature} /></span>
            </p>
          </div>

          <div className="update">
            Updated:
            <span><FormattedDate date={props.data.date} /></span>
          </div>
        </div>

        <div className="bottom-group">
          <div className="precip-humid-wind">
            <div className="row">
              <div className="col">
                <i className="fas fa-tint"></i>
                Humidity: <span>{props.data.humidity}</span>%
              </div>
              <div className="col">
                <i className="fas fa-wind"></i>
                Wind: <span>{props.data.wind}</span>km/h
              </div>
            </div>
          </div>
          <div className="long-middle-line">
            <hr />
          </div>
        </div>
        </div>
  )
}