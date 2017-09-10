import React, { Component } from 'react';
import SearchBar from '../containers/search-bar'
import WeatherList from '../containers/weather-list';

export default function App(){
  return (
    <div>
      <SearchBar/>
      <WeatherList/>
    </div>)
};
