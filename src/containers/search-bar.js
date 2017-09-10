import React, {Component} from 'react';

export default class SearchBar extends Component{

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
  }
}