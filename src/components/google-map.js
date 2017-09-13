import React, {Component} from 'react';

class GoogleMap extends Component{

  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: parseFloat(this.props.zoom||10),
      center : { lat: parseFloat(this.props.lat), lng: parseFloat(this.props.lon)}
    });
  }

  render(){
    console.log('here');
    return <div ref="map"/>
  }

}

export default GoogleMap;