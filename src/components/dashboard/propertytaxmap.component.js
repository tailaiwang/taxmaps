import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const google = window.google

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
  		heatmapPoints: [
          //ontario avg** - 1.26
		  		{lat: 43.65224, lng: -79.383905}, // Toronto - 3.78
					{lat: 45.430512, lng: -75.697459}, // Ottawa - 2.59
          {lat: 46.814430, lng: -71.207291}, // Quebec City - 3.57
          {lat: 44.647259, lng: -63.572682}, // Halifax - 2.80
          {lat: 45.400713, lng: -73.567433}, // Montreal - 3.78
          {lat: 49.893098, lng: -97.120112}, // Winnipeg - 1.98
          {lat: 50.444706, lng: -104.618964}, // Regina - 1.74
          {lat: 52.132481, lng: -106.670249}, // Saskatoon - 1.72
          {lat: 53.545194, lng: -113.494049}, // Edmonton - 2.44
          {lat: 51.043253, lng: -114.071547}, // Calgary - 3.06
          {lat: 49.282100, lng: -123.120759}, // Vancouver - 4.40
          {lat: 42.314423, lng: -83.036564}, // Windsor - 1.79
          {lat: 42.4022548, lng: -82.190827}, // Chatham - 1.88
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
