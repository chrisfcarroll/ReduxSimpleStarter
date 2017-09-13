import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from "../components/google-map";


const renderWeather = (data)=> {
  const name= data.name;
  const temperatures= data.Period.map(p=> p.Rep[0].T);
  const probRain= data.Period.map(p=> p.Rep[0].Pp);
  const humid= data.Period.map(p=> p.Rep[0].H);
  console.log(temperatures);
  return (<tr key={data.i}>
    <td>
      {data.name} ({data.lat},{data.lon})
      <GoogleMap lat={data.lat} lon={data.lon}/>
    </td>
    <td><Chart data={temperatures} colour="orange" unitsSymbol= "&#x2103;" /></td>
    <td><Chart data={probRain} colour="blue" unitsSymbol="%" /></td>
    <td><Chart data={humid} colour="red" unitsSymbol="%" /></td>
  </tr>);
}

const WeatherList = ({weather})=>

  (<div>
    <table className="table table-hover weather">
      <thead><tr><th>City</th><th>Temperature</th><th>Chance of Rain</th><th>Humidity</th></tr></thead>
      <tbody>
        {weather.map(renderWeather)}
      </tbody>
    </table>
  </div>);


const mapStateToProps = ({weather})=>({weather});

export default connect(mapStateToProps)(WeatherList);