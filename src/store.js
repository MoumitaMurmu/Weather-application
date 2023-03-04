import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';



const initialState = {
  temperatureUnit: 'Celsius',
};

const SET_TEMPERATURE_UNIT = 'SET_TEMPERATURE_UNIT';

export const setTemperatureUnit = (unit) => ({
  type: SET_TEMPERATURE_UNIT,
  payload: unit,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEMPERATURE_UNIT:
      return { ...state, temperatureUnit: action.payload };
    default:
      return state;
  }
};


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
