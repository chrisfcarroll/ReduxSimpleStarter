import {FETCH_WEATHER} from "../actions/fetch-weather-action";

let isLocationInState = function (state, location) {
  return state.find(l => l.i == location.i) === undefined;
};
export default  function(state=[], action){
  console.log('received', action.payload);

  switch(action.type){
    case FETCH_WEATHER:
      return isLocationInState(state, action.payload.data.SiteRep.DV.Location)
                ? [action.payload.data.SiteRep.DV.Location, ...state]
                : state;
    default: return state;
  }
}