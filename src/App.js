import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import SearchBar from './Component/SearchBar';
import WeatherPage from './Component/WeatherPage';
import './App.css';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <div>
        <Router>
        <Routes>
        <Route exact path="/" element={<SearchBar />} />
        <Route path="/weather/:city" element={<WeatherPage />} />

        </Routes>
         
        </Router>
      </div>
    </Provider>
  
    </div>
  ); 
}

export default App;
















