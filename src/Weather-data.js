import React, {useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import TemperatureUnit from "./TemperatureUnit";
import Forecast from "./Forecast";

export default function Weatherdata (props) {
    
    let [weatherData, setWeatherData] = useState({ready: false});    
    let [city, setCity] = useState(props.city);
    
    

    function updateWeather(response){
        setWeatherData({
            temperature: Math.round(response.data.temperature.current),
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
            icon: <img src={response.data.condition.icon_url} alt={response.data.condition.description}/>,
            ready: true,
            date: new Date(response.data.time), 
            city: response.data.city,         
        });                    
    }    

    function search(){
        let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=8dod4a3bd4def17f159b978bb700cbt9`;
        axios.get(url).then(updateWeather);

    }
   
   
    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function updateCity(event){
        setCity(event.target.value);
    }

    if (weatherData.ready){    
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
                {weatherData.city}
            </h1>
            <p className="weather-app-details">
                <FormattedDate date={weatherData.date}/>
                Humidity: <strong>{weatherData.humidity}%</strong>, Wind: <strong>{weatherData.wind}km/h</strong>
            </p>
        </div>
        <div className= "weather-app-temperature-container">
            <div className="weather-app-temperature-icon">{weatherData.icon}</div>
            <TemperatureUnit temperature={weatherData.temperature}/>
        </div>
        </div>
        </div>

    );
    } else {
    
        search();
        return(
        "The app is loading..."
    );

    }
}