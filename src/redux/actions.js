import { SET_TEMP_UNIT, TOGGLE_TEMP_UNIT } from './types';

export const setTempUnit = (unit) => {
  return {
    type: SET_TEMP_UNIT,
    payload: unit
  };
};

export const toggleTempUnit = () => {
  return {
    type: TOGGLE_TEMP_UNIT
  };
};
