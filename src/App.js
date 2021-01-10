import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
return (
    <div className="App">
      <div className="container">
       <Weather defaultCity="New York"/>
       <br />
       <footer className="gitHub-link">
      <a href="https://github.com/BeaDT/weather-react" target="_blank" rel="noreferrer"
        >Open-source code
        </a>
      {" "} by Beatrice Del Toro
    </footer>
      </div>
    </div>
  );
}


