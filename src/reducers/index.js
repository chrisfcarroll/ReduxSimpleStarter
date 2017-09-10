import { combineReducers } from 'redux';
import WeatherReducer from './reduce-weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
