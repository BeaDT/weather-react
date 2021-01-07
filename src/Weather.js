import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
setWeatherData({
  ready: true,
  temperature: response.data.main.temp,
  description:response.data.weather[0].description,
  date:"Wednesday 9:00",
  iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
  humidity: response.data.main.humidity,
  wind:response.data.wind.speed,
  city: response.data.name
});

  }

  if (weatherData.ready) {
  return (
    <div className="Weather">
      <div className="container">
        <div className="enter-city">
          <form>
            <input
              type="text"
              placeHolder="Enter City Here..."
              autoComplete="off"
            />
            <button type="submit" className="btn btn-info">
              Search
            </button>
            <button type="submit" className="btn btn-success">
              Your Location
            </button>
          </form>
        </div>
        <div className="img">
          <svg
            id="b50c90a1-13f8-40ae-8a07-2cff909416b3"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            viewBox="0 0 881 722.6285"
          >
            <title>weather app</title>
            <path
              d="M929.0078,664.12182A147.00755,147.00755,0,0,0,691.71969,548.10269a159.07307,159.07307,0,0,0-271.92184,55.72683,118.634,118.634,0,1,0-78.81678,207.299c1.84378,0,3.67613-.04812,5.49935-.13134,1.88272.0816,3.77367.13134,5.67649.13134h445.3187A128.96348,128.96348,0,0,0,925.82678,694.64159,147.58681,147.58681,0,0,0,929.0078,664.12182Z"
              transform="translate(-159.5 -88.8715)"
              fill="#00bfa6"
            />
            <path
              d="M934.0078,646.12182A147.00755,147.00755,0,0,0,696.71969,530.10269a159.07307,159.07307,0,0,0-271.92184,55.72683,118.634,118.634,0,1,0-78.81678,207.299c1.84378,0,3.67613-.04812,5.49935-.13134,1.88272.0816,3.77367.13134,5.67649.13134h445.3187A128.96348,128.96348,0,0,0,930.82678,676.64159,147.58681,147.58681,0,0,0,934.0078,646.12182Z"
              transform="translate(-159.5 -88.8715)"
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
            />
            <circle cx="192.67483" cy="368.80265" r="93.44501" fill="#00bfa6" />
            <rect
              x="170.07702"
              y="165.0559"
              width="45.80638"
              height="92.34565"
              rx="22.90316"
              fill="#00bfa6"
            />
            <rect
              x="465.88736"
              y="332.97883"
              width="45.80638"
              height="92.34565"
              rx="22.90316"
              transform="translate(413.25024 -322.60071) rotate(60)"
              fill="#00bfa6"
            />
            <rect
              x="192.65593"
              y="490.02383"
              width="45.80638"
              height="92.34565"
              rx="22.90316"
              transform="translate(-300.52123 902.10317) rotate(-120)"
              fill="#00bfa6"
            />
            <rect
              x="192.96131"
              y="332.4499"
              width="45.80638"
              height="92.34565"
              rx="22.90316"
              transform="translate(-379.46465 287.38402) rotate(-60)"
              fill="#00bfa6"
            />
            <circle
              cx="203.67483"
              cy="357.80265"
              r="93.44501"
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
            />
            <rect
              x="181.07702"
              y="154.0559"
              width="45.80638"
              height="92.34565"
              rx="22.90316"
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
            />
            <rect
              x="476.88736"
              y="321.97883"
              width="45.80638"
              height="92.34565"
              rx="22.90316"
              transform="translate(409.22396 -337.62699) rotate(60)"
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
            />
            <rect
              x="203.65593"
              y="479.02383"
              width="45.80638"
              height="92.34565"
              rx="22.90316"
              transform="translate(-274.49495 895.12945) rotate(-120)"
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
            />
            <rect
              x="203.96131"
              y="321.4499"
              width="45.80638"
              height="92.34565"
              rx="22.90316"
              transform="translate(-364.43837 291.4103) rotate(-60)"
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
            />
            <path
              d="M856.72172,619.57327l-16.09125,32.80139s-29.088-3.71336-17.329,34.65808c0,0-3.09447,29.088-9.28342,35.277s4.95116,47.036,27.23135,35.277c12.53261-6.61444,13.31589-14.208,11.60245-19.58628a48.52969,48.52969,0,0,1-1.50512-24.87846c2.23615-10.46961,6.264-23.85975,13.42065-35.37262,14.23456-22.89908,27.85024-45.17927,27.85024-45.17927Z"
              transform="translate(-159.5 -88.8715)"
              fill="#a0616a"
            />
            <path
              d="M816.4936,417.81376s-35.277-8.66451-47.036-2.47557-46.41706,6.80783-46.41706,6.80783-29.088,47.036-22.28019,71.17284,35.277,38.99033,35.277,38.99033l95.9286.61889,15.47235-63.1272s-7.42673-43.3226-13.61567-45.79817S816.4936,417.81376,816.4936,417.81376Z"
              transform="translate(-159.5 -88.8715)"
              fill="#3f3d56"
            />
            <circle cx="625.43" cy="112.94819" r="52.60601" fill="#2f2e41" />
            <path
              d="M752.12861,246.999s6.18894,25.99355-3.09448,29.088-17.329,15.47236-17.329,15.47236l13.61567,22.89908,46.41706,11.759,14.23457-13.61567,10.5212-29.088L805.9724,276.087s-9.90231,3.09448-10.5212-6.80783a165.03255,165.03255,0,0,1,.61889-22.28019Z"
              transform="translate(-159.5 -88.8715)"
              fill="#a0616a"
            />
            <path
              d="M752.12861,246.999s6.18894,25.99355-3.09448,29.088-17.329,15.47236-17.329,15.47236l13.61567,22.89908,46.41706,11.759,14.23457-13.61567,10.5212-29.088L805.9724,276.087s-9.90231,3.09448-10.5212-6.80783a165.03255,165.03255,0,0,1,.61889-22.28019Z"
              transform="translate(-159.5 -88.8715)"
              opacity="0.1"
            />
            <circle cx="616.45603" cy="137.39451" r="37.75255" fill="#a0616a" />
            <path
              d="M773.7899,312.60175,737.894,279.80036S721.80279,293.416,719.94611,293.416s-25.99356,7.42673-26.61245,10.5212,21.0424,35.89587,21.0424,35.89587-4.95115,24.13687,0,34.65807,1.23779,55.70048,1.23779,55.70048,32.80139-11.759,50.13043-6.18894,68.07836,0,68.07836,0,7.42673-47.65486,4.33226-53.8438-3.71337-41.46591-3.71337-41.46591L861.054,299.605s-5.57-22.28019-26.61245-23.518-34.03918-2.47557-34.03918-2.47557Z"
              transform="translate(-159.5 -88.8715)"
              fill="#2f2e41"
            />
            <path
              d="M731.7051,464.84972s-69.31615-31.5636-97.16639-46.41706-70.55394-3.09447-56.93827,30.32581,89.73966,66.22168,89.73966,66.22168,24.75577,18.56683,39.60923,17.94793,36.20531-.30944,36.20531-.30944Z"
              transform="translate(-159.5 -88.8715)"
              fill="#3f3d56"
            />
            <path
              d="M838.77379,469.182s124.39773,1.23779,116.35211,47.65486-55.70048,123.77883-64.365,125.63552-40.22812-11.759-40.22812-16.09125S880.8586,542.2115,880.8586,542.2115l-74.26731-22.89909Z"
              transform="translate(-159.5 -88.8715)"
              fill="#3f3d56"
            />
            <path
              d="M862.29177,330.54968s7.42673,71.17284,3.71337,82.31293S849.295,454.32852,832.58485,469.182s-40.22812,89.73966-53.2249,53.8438,21.0424-55.70048,21.0424-55.70048l34.12092-48.006.32053-78.12587Z"
              transform="translate(-159.5 -88.8715)"
              fill="#a0616a"
            />
            <path
              d="M723.04058,479.70318s61.27052,21.6613,68.07836,18.56683,21.6613,8.04562,21.6613,8.04562a53.35152,53.35152,0,0,1,40.22812,7.42673C872.813,526.73914,877.14523,541.5926,872.813,542.2115s-19.80461-6.18894-19.80461-6.18894-23.518-4.95116-37.75255-.6189-32.78645-4.80126-32.78645-4.80126l-75.52-16.86Z"
              transform="translate(-159.5 -88.8715)"
              fill="#a0616a"
            />
            <path
              d="M723.04058,479.70318s61.27052,21.6613,68.07836,18.56683,21.6613,8.04562,21.6613,8.04562a53.35152,53.35152,0,0,1,40.22812,7.42673C872.813,526.73914,877.14523,541.5926,872.813,542.2115s-19.80461-6.18894-19.80461-6.18894-23.518-4.95116-37.75255-.6189-32.78645-4.80126-32.78645-4.80126l-75.52-16.86Z"
              transform="translate(-159.5 -88.8715)"
              opacity="0.1"
            />
            <path
              d="M693.33366,357.16213s.61889,76.74288,9.9023,86.0263,19.18572,21.66129,28.46914,27.23134,14.23456,18.56683,14.23456,18.56683,44.56039,64.98389,45.17928,35.277-22.89909-53.22491-22.89909-53.22491l-4.60258-4.38341a209.08448,209.08448,0,0,1-27.18208-31.20142,32.53274,32.53274,0,0,0-6.58678-7.11886c-8.04562-6.18895-9.9023-74.26731-9.9023-74.26731Z"
              transform="translate(-159.5 -88.8715)"
              fill="#a0616a"
            />
            <path
              d="M848.0572,292.17824,861.054,299.605s4.95116,32.8014,7.42673,37.13366-30.32581,15.47235-35.277,12.37788-7.42673-33.42029-7.42673-33.42029Z"
              transform="translate(-159.5 -88.8715)"
              fill="#2f2e41"
            />
            <path
              d="M701.37928,303.31834h-8.04562s-8.66452,9.28341-8.04563,29.088-7.42673,32.18249-2.47557,34.03918,29.64738-7.97106,29.3677-5.22332,12.7171-2.20341,12.7171-2.20341l-8.66452-32.8014Z"
              transform="translate(-159.5 -88.8715)"
              fill="#2f2e41"
            />
            <path
              d="M639.18143,430.19165s37.75255,16.09125,48.27375,18.56682S731.98107,480.202,731.98107,480.202l-23.21158,35.24722s-23.78989-2.94463-36.78667-5.42021-90.35855-53.8438-77.36177-62.50831S639.18143,430.19165,639.18143,430.19165Z"
              transform="translate(-159.5 -88.8715)"
              opacity="0.1"
            />
            <path
              d="M631.44424,430.19165s37.75254,16.09125,48.27374,18.56682,51.98712,30.94471,51.98712,30.94471l-20.42351,39.60923s-34.03918-6.80783-47.036-9.28341-90.35855-53.8438-77.36177-62.50831S631.44424,430.19165,631.44424,430.19165Z"
              transform="translate(-159.5 -88.8715)"
              fill="#3f3d56"
            />
            <circle cx="635.64175" cy="77.36177" r="52.60601" fill="#2f2e41" />
            <circle cx="650.49521" cy="24.75577" r="24.75577" fill="#2f2e41" />
            <line
              y1="722.1285"
              x2="881"
              y2="722.1285"
              fill="none"
              stroke="#3f3d56"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
        <div className="top-left-info">
          <div className="current-city">
            <h1 id="chosen-city">{weatherData.city}</h1>
          </div>

          <div className="first-left-line">
            <hr />
          </div>

          <div className="current-weather-info">
            <p>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="main-icon"
              />
              <span className="text-capitalize">{weatherData.description} </span>
              <span className="temp-number">{Math.round(weatherData.temperature)}</span>
              <span className="units">
                <a href="/" className="active">
                  °C
                </a>
                |<a href="/">°F</a>
              </span>
            </p>
          </div>

          <div className="update">
            Updated:
            <span>{weatherData.date}</span>
          </div>
        </div>

        <div className="bottom-group">
          <div className="precip-humid-wind">
            <div className="row">
              <div className="col">
                <i className="fas fa-tint"></i>
                Humidity: <span>{weatherData.humidity}</span>%
              </div>
              <div className="col">
                <i className="fas fa-wind"></i>
                Wind: <span>{weatherData.wind}</span>km/h
              </div>
            </div>
          </div>
          <div className="long-middle-line">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
  } else {

const apiKey = "2c01c84d2f25936279dc3368bd18575f";
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
}
}