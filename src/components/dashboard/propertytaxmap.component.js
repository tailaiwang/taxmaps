// import React, {Component} from 'react';
// import {Map, GoogleApiWrapper} from 'google-maps-react';
// import {MapContainer} from 'google-maps-react';
//
// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };
//
// class PropertyTaxMap extends Component {
//
//     render() {
//         return (
//           <div>
//             <h1>Property Tax Heat Map</ h1>
//             <Map
//               google={this.props.google}
//               zoom={3.5}
//               style={mapStyles}
//               initialCenter={{lat: 55.0000, lng: -100.0000}}
//             />
//           </div>
//         );
//     }
// }
//
// //export default PropertyTaxMap;
// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyCb29b7bfQhT1MTAwDgH54Xj51u7pzFP50'
// })(PropertyTaxMap);


import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const google = window.google

class PropertyTaxMap extends Component {
  static defaultProps = {
    center: {
      lat: 55.0000,
      lng: -100.0000
    },
    zoom: 3.5
  }

  constructor(props) {
  	super(props)
  	this.state = {
      heatmapVisible: true,
  		heatmapPoints: [
		  		{lat: 59.95, lng: 30.33}, // Random filler
					{lat: 59.96, lng: 30.32},
          {lat: 55.0000, lng: -100.0000}
				]
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
