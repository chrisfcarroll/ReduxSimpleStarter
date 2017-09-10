const OW_API_KEY='77ed90030a5cbb2d0fa9fbfcb95f20eb';
const MO_api_key='cb2fb924-2d46-4840-83cd-2202e9b06941';
const MO_baseurl='http://datapoint.metoffice.gov.uk/public/data/';
const ROOT_url='http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/{0}?res=3hourly&key=cb2fb924-2d46-4840-83cd-2202e9b06941';

export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(location){
  const code='310158';
  const url= ROOT_url.replace('{0}',code);
  return {type: FETCH_WEATHER, location:location, url:url};
}

//fetch weather data
//http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/xml/3840?res=3hourly&key=cb2fb924-2d46-4840-83cd-2202e9b06941
//openweather 77ed90030a5cbb2d0fa9fbfcb95f20eb

