import React, {useState} from "react";
import axios from "axios";

export default function Weatherdata () {
    
    let [weatherData, setWeatherData] = useState({ready: false});    
    let [city, setCity] = useState("Lisbon");
    let [date, setDate] = useState("MON");
    let [time, setTime] = useState("12:00");
    
    

    function updateWeather(response){
        setWeatherData({
            temperature: Math.round(response.data.temperature.current),
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            icon: <img src={response.data.condition.icon_url} alt={response.data.condition.description}/>,
            ready: true
           
        });
        
        setDate("lala");
        setTime("lala");        
        setReady(true);     
    }    

    function handleSubmit(event){
        event.preventDefault();
    }

    function updateCity(event){
        setCity(event.target.value);
    }
    if (ready){    
    return (
        <div>
        <div className="Form"> 
            <form className ="search-form" onSubmit={handleSubmit}>
                <input type="search" placeholder="Enter a city..." required className="form-search-box" onChange={updateCity}/>
                <input type="submit" value="Search" className="form-search-button"/>
            </form>
        </div>
        <div className="weather-data"> 
        <div> 
            <h1>
                {city}
            </h1>
            <p className="weather-app-details">
                <span>{date}</span>, <span>{time}</span>
                <br/>
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind: <strong>{weatherData.wind}km/h</strong>
            </p>
        </div>
        <div className= "weather-app-temperature-container">
            <div>{weatherData.icon}</div>
            <div className= "weather-app-temperature-value">{weatherData.temperature}</div>
            <div className= "weather-app-temperature-unit">ºC|F</div>
        </div>
        </div>
        </div>
    );
    } else {
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=8dod4a3bd4def17f159b978bb700cbt9`;
    axios.get(url).then(updateWeather);

    return(
        "The app is loading..."
    );

    }
}