import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const google = window.google

var propertytax = require('./assets/json/property-tax');
const getData = (jdata) =>{
	var data = [];
	var i;
  var end = jdata.length;
  var lat;
  var lng;
  var rate;
	for (i = 0; i < end; i++) {
    lat = jdata[i].lat;
    lng = jdata[i].long;
    rate = jdata[i].rate;
    data.push({"lat": lat, "lng": lng});
  }
  console.log(data);
	return data;
}

class PropertyTaxMap extends Component {
  static defaultProps = {
    center: {
      lat: 50.150341,
      lng: -85.016414
    },
    zoom: 5.5
  }

  constructor(props) {
    super(props)
  	this.state = {
      heatmapVisible: true,
  		heatmapPoints: getData(propertytax)
  	}
  }

  render() {

  	const apiKey = {key: 'AIzaSyCb29b7bfQhT1MTAwDgH54Xj51u7pzFP50'}
  	const heatMapData = {
  		positions: this.state.heatmapPoints,
		options: {
			radius: 20,
			opacity: 0.6
		}
  	}

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={apiKey}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          heatmapLibrary={true}
          heatmap={heatMapData}
        >
        </GoogleMapReact>
      </div>
    )
  }
}

export default PropertyTaxMap
