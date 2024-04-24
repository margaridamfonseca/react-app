import React from "react";

export default function WeatherForecastDay(props){
    
    
    function Day(){
        let date = new Date(props.data.time *1000);
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[date.getDay()];
        
        return(`${day}`);
    }
    

    return(
        <div className="weather-forecast-day">
            <div className="weather-forecast-date">{Day()}</div>
                <img src={props.data.condition.icon_url} alt={props.data.condition.description} className="weather-forecast-icon"/>          
            <div className="weather-forecast-temperatures">
                <div className="weather-forecast-temperature-max">
                <strong>{Math.round(props.data.temperature.maximum)}º</strong>
                </div>
                <div className="weather-forecast-temperature-min">{Math.round(props.data.temperature.minimum)}º</div>
            </div>
        </div>

    );
    
}