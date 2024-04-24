import React, {useState} from "react";
import axios from "axios";


export default function Forecast(props){

    let [loaded, setLoaded] = useState(false);
    

    function updateForecast(response){
        console.log(response);
    }

    if (loaded) {  

    return(
        <div className="forecast">
            <div className="weather-forecast-day">
                <div className="weather-forecast-date">Tue</div>
                <p  className="weather-forecast-icon">☀️</p>            
            <div className="weather-forecast-temperatures">
                <div className="weather-forecast-temperature-max">
                <strong>18º</strong>
                </div>
                <div className="weather-forecast-temperature-min">10º</div>
            </div>
            </div>
        </div>
    );

    } else {
        let city = props.city;
        let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=8dod4a3bd4def17f159b978bb700cbt9&units=metric`
        axios.get(url).then(updateForecast);

        return null;

    }
}