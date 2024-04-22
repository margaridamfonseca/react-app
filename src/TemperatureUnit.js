import React, {useState} from "react";

export default function TemperatureUnit(props){

    let [unit, setUnit] = useState("celsius");

    function showFharenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
    return(
        <div className="weather-app-temperature-container">
        <div className= "weather-app-temperature-value">{props.temperature}</div>
        <div className= "weather-app-temperature-unit">ºC|<a href="/" onClick={showFharenheit}>F</a></div>
        </div>

    );
} else {
    let fahrenheit = Math.round((props.temperature * 9/5) + 32);
    return(
        <div className="weather-app-temperature-container">
        <div className= "weather-app-temperature-value">{fahrenheit}</div>
        <div className= "weather-app-temperature-unit">º<a href="/" onClick={showCelsius}>C</a>|F</div>
        </div>
    );
}
    
    
}