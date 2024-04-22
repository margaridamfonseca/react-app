import React from "react";

export default function Weatherdata () {
    return (
       <div className="weather-data"> 
        <div> 
            <h1>
                Paris
            </h1>
            <p className="weather-app-details">
                <span id="time">Thursday</span>, <span id="weatherCondition">12:00</span>
                <br/>
                Humidity: <strong id="humidity">18%</strong>, Wind: <strong id="windSpeed">2km/h</strong>
            </p>
        </div>
        <div className= "weather-app-temperature-container">
            <div id="icon"></div>
            <div className= "weather-app-temperature-value" id="weather-app-temperature-value">11</div>
            <div className= "weather-app-temperature-unit">ºC</div>
        </div>
    </div>
    );
}