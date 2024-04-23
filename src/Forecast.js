import React, {useState} from "react";
import axios from "axios";

export default function Forecast (props){

    let [forecastData, setForecastData] = useState({ready: false});
    let [city, setCity] = useState(props.city);

    

    function updateForecast(response){
        setForecastData({
            date: "Tue" ,
            icon: <img src= {response.data.daily[0].condition.icon_url} />,
            temperatureMax: Math.round(response.data.daily[0].temperature.maximum),
            temperatureMin: Math.round(response.data.daily[0].temperature.minimum),
            ready: true

        });
    }

    if (forecastData.ready){
    return (
        <div className="forecast">
            <div className="weather-forecast-day">
                <div className="weather-forecast-date">{forecastData.date}</div>
                <p  className="weather-forecast-icon">{forecastData.icon}</p>
                <div className="weather-forecast-temperatures">
                    <div className="weather-forecast-temperature-max">
                    <strong>{forecastData.temperatureMin}º</strong>
                    </div>
                    <div className="weather-forecast-temperature-min">{forecastData.temperatureMax}º</div>
                </div>
            </div>        
        </div>
    );
    } else {

        let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=8dod4a3bd4def17f159b978bb700cbt9`
        axios.get(url).then(updateForecast);
        return ("");
    }
}
 