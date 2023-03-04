import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';
import { setTemperatureUnit } from '../store';

const SearchBar = () => {
  const [city, setCity] = useState('');
  // const [unit, setUnit] = useState('Celsius');
  const dispatch = useDispatch();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleUnitChange = (event) => {
    // setUnit(event.target.value);
    dispatch(setTemperatureUnit(event.target.value));
  };

  return (
    <div className="search-bar">
    <h1 className="headertext"><Header /></h1><br/>
   
      <input type="text" id="search-input" value={city} onChange={handleCityChange} placeholder="Location"/>
      {/* <select onChange={handleUnitChange}>
        <option value="C">Celsius</option>
        <option value="F">Fahrenheit</option>
      </select> */}
      <br/>
      <Link to={`/weather/${city}`}><button>Search</button></Link>
    </div>
  );
};

export default SearchBar;
