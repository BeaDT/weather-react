import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
return (
    <div className="App">
      <div className="container">
       <Weather />
       <footer className="gitHub-link">
      <a href="https://github.com/BeaDT/Weather-app" target="blank"
        >Open-source code</a
      >
      {" "} by Beatrice Del Toro
    </footer>
      </div>
    </div>
  );
}


