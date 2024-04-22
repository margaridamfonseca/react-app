import './App.css';
import Form from "./Form";
import Weatherdata from "./Weather-data";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
    <div className="container">
    <div className="weather-app"> 
      <header> 
         <Form /> 
      </header>
      <main>
          <Weatherdata />
          <Forecast />                
      </main>     
      <footer>
          This project was coded by <a href= "https://github.com/margaridamfonseca" target="_blank" rel="noreferrer"> Margarida Fonseca </a>, is open-sourced on <a href="https://github.com/margaridamfonseca/my-weather-app-redo" target="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://my-weather-app-redo.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>.
      </footer>
  </div>
  </div>
  </div> 
  );
}

export default App;
