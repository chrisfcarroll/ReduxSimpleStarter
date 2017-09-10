import {FETCH_WEATHER} from "../actions/fetch-weather-action";

export default  function(state=[], action){
  console.log('received', action.payload);

  switch(action.type){
    case FETCH_WEATHER:
      if(state.find(l=>l.i==action.payload.data.SiteRep.DV.Location.i) === undefined ) {
        return [action.payload.data.SiteRep.DV.Location, ...state];
      }else{
        console.log('duplicate ignored');
      }
    default: return state;
  }
}