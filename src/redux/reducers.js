import { SET_TEMP_UNIT, TOGGLE_TEMP_UNIT } from './types';

const initialState = {
  tempUnit: 'C'
};

const tempUnitReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_TEMP_UNIT:
        return {
          ...state,
          tempUnit: action.payload
        };
      case TOGGLE_TEMP_UNIT:
        return {
          ...state,
          tempUnit: state.tempUnit === 'C' ? 'F' : 'C'
        };
      default:
        return state;
    }
  };
  
  export default tempUnitReducer;
  