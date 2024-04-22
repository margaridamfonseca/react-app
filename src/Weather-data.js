import React from "react";

export default function Weatherdata () {
    return (
       <div className="weather-data"> 
        <div> 
            <h1>
                Paris
            </h1>
            <p className="weather-app-details">
                <span>Thursday</span>, <span>12:00</span>
                <br/>
                Humidity: <strong>18%</strong>, Wind: <strong>2km/h</strong>
            </p>
        </div>
        <div className= "weather-app-temperature-container">
            <div id="icon"></div>
            <div className= "weather-app-temperature-value">11</div>
            <div className= "weather-app-temperature-unit">ºC</div>
        </div>
    </div>
    );
}