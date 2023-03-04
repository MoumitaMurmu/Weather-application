import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import TemperatureUnitSwitch from './TemperatureUnitSwitch';

const WeatherPage = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [tempUnit, setTempUnit] = useState('C');
  const [showToggle, setShowToggle] = useState(false);
  // const tempUnit = useSelector(state => state.tempUnit);
  const { city } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=8e11e3129b31460ebf452601230403&q=${city}`)
      .then(res => {
        setWeatherData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const getTemp = () => {
    if (tempUnit === 'C') {
      return weatherData.current.temp_c + '°C';
    } else {
      return weatherData.current.temp_f + '°F';
    }
  }

  const handleUnitChange = (event) => {
    setTempUnit(event.target.value);
    // setShowToggle(true);
  }
  
  // const handleToggleChange = (event) => {
  //   setShowToggle(false);
  // }

  return (
    
    <div className="weather-page">
    <h1 className="weather-data">Weather Data</h1>
    {/* <div className="toggle-box">
    {showToggle &&
        <div className="toggle-switch">
          <label className="switch">
            <input type="checkbox" onChange={handleToggleChange} />
            <span className="slider round"></span>
          </label>
          
        </div>
        
      }
      <span className="toggle-text"></span>
    </div> */}
   
      
      <div className="temp-unit-selector">
        <label>
          <input id="radio-box" type="checkbox" value="C" checked={tempUnit === 'C'} onChange={handleUnitChange} />
          Celsius
        </label>
        <label id="f-l">
          <input id="radio-box" type="checkbox" value="F" checked={tempUnit === 'F'} onChange={handleUnitChange} />
          Fahrenheit
        </label>
      </div>
      <div className="weather-card">
         <p>Location: {city}</p>
         
         <img src={weatherData.current.condition.icon} alt="weather icon" />
         
        
        <div className="temp">{getTemp()}</div>
        <div className="condition">{weatherData.current.condition.text}</div>

      </div>
     
     
    </div>
  );
}

export default WeatherPage;
