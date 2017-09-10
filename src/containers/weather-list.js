import React, {Component} from 'react';
import {connect} from 'react-redux';

const renderWeather = (data)=>
  (<tr key={data.i}>
    <td>{data.name}</td>
    <td>{data.Period[0].Rep[0].T}</td>
    <td>{data.Period[0].Rep[0].Pp}%</td>
  </tr>);

const WeatherList = ({weather})=>

  (<table className="table table-hover">
      <thead><tr><th>City</th><th>Temperature</th><th>Chance of Rain</th></tr></thead>
      <tbody>
        {weather.map(renderWeather)}
      </tbody>
    </table>);


const mapStateToProps = ({weather})=>({weather});

export default connect(mapStateToProps)(WeatherList);