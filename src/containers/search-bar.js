import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions/fetch-weather-action";

class SearchBar extends Component{

  state= {term:''}

  constructor(props){
    super(props);
    this.onInputChange=this.onInputChange.bind(this);
    this.onFormSubmit =this.onFormSubmit.bind(this);
  }

  render(){
    return (
      <form className="input-group search-bar" onSubmit={this.onFormSubmit}>
        <input
          placeholder="enter a placename to forecast"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>);
  }


  onInputChange(e) { this.setState({term:e.target.value});  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }
}

function mapDispatchToProps(dispatch){return bindActionCreators({fetchWeather}, dispatch)}

export default connect(null,mapDispatchToProps)(SearchBar);