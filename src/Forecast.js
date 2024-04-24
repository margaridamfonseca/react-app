import React, {useState} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function Forecast(props){

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState("");
    

    function updateForecast(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {  

    return(
        <div className="forecast">
            {forecast.map(function (dailyforecast, index){
                if (index < 5) {
                    return(
                    <WeatherForecastDay data={dailyforecast} />
                    );
                } else {
                    return null;
                }
            })}
            
        </div>
    );

    } else {
        let city = props.city;
        let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=8dod4a3bd4def17f159b978bb700cbt9&units=metric`
        axios.get(url).then(updateForecast);

        return null;

    }
}