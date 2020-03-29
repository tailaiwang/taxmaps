import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const google = window.google

var propertytax = require('./assets/json/property-tax');
const getData = (jdata) =>{
	var data = [];
	var i;
  var j;
  var end = jdata.length;
  var lat;
  var lng;
  var rate;
	for (i = 0; i < end; i++) {
    lat = jdata[i].lat;
    lng = jdata[i].long;
    rate = jdata[i].rate;
    data.push({"lat": lat, "lng": lng});
    if (jdata[i].rate < 1) {
      for (j = 0; j < 13; j++) {
        data.push({"lat": lat, "lng": lng});
      }
    } else if (jdata[i].rate < 1.25) {
      for (j  = 0; j < 23; j++) {
        data.push({"lat": lat, "lng": lng});
      }
    } else if (jdata[i].rate < 1.5) {
      for (j  = 0; j < 33; j++) {
        data.push({"lat": lat, "lng": lng});
      }
    } else if (jdata[i].rate > 1.5) {
      for (j  = 0; j < 50; j++) {
        data.push({"lat": lat, "lng": lng});
      }
    }
  }

  console.log(data);
	return data;
}

class PropertyTaxMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.150341,
      lng: -82.016414
    },
    zoom: 7
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
			radius: 15,
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
          <div id="mapinfor">
            <h4>Property Tax Heat Map</h4>
            <table>
              <tr>
                <th>City</th>
                <th>Average Property Tax Rate</th>
              </tr>
              <tr>
                <td>Toronto</td>
                <td>0.614770%</td>
              </tr>
              <tr>
                <td>Markham</td>
                <td>0.659822%</td>
              </tr>
              <tr>
                <td>Milton</td>
                <td>0.685776%</td>
              </tr>
              <tr>
                <td>Richmond Hill</td>
                <td>0.6883357%</td>
              </tr>
              <tr>
                <td>Vaughan</td>
                <td>0.696147%</td>
              </tr>
              <tr>
                <td>Oakville</td>
                <td>0.734441%</td>
              </tr>
              <tr>
                <td>Burlington</td>
                <td>0.783768%</td>
              </tr>
              <tr>
                <td>Aurora</td>
                <td>0.786101%</td>
              </tr>
              <tr>
                <td>Mississauga</td>
                <td>0.801443%</td>
              </tr>
              <tr>
                <td>Halton Hills</td>
                <td>0.803785%</td>
              </tr>
              <tr>
                <td>Caledon</td>
                <td>0.817007%</td>
              </tr>
              <tr>
                <td>Newmarket</td>
                <td>0.820466%</td>
              </tr>
              <tr>
                <td>Brampton</td>
                <td>0.990771%</td>
              </tr>
              <tr>
                <td>Ottawa</td>
                <td>1.076669%</td>
              </tr>
              <tr>
                <td>Waterloo</td>
                <td>1.087501%</td>
              </tr>
              <tr>
                <td>Pickering</td>
                <td>1.103511%</td>
              </tr>
              <tr>
                <td>Ajax</td>
                <td>1.107287%</td>
              </tr>
              <tr>
                <td>Kitchener</td>
                <td>1.110840%</td>
              </tr>
              <tr>
                <td>Whitby</td>
                <td>1.139696%</td>
              </tr>
              <tr>
                <td>Guelph</td>
                <td>1.140523%</td>
              </tr>
              <tr>
                <td>Cambridge</td>
                <td>1.184230%</td>
              </tr>
              <tr>
                <td>Hamilton</td>
                <td>1.2218870%</td>
              </tr>
              <tr>
                <td>Barrie</td>
                <td>1.232466%</td>
              </tr>
              <tr>
                <td>Niagara Falls</td>
                <td>1.284300%</td>
              </tr>
              <tr>
                <td>London</td>
                <td>1.340225%</td>
              </tr>
              <tr>
                <td>Kingston</td>
                <td>1.342238%</td>
              </tr>
              <tr>
                <td>Orangeville</td>
                <td>1.343032%</td>
              </tr>
              <tr>
                <td>Oshawa</td>
                <td>1.344725%</td>
              </tr>
              <tr>
                <td>Peterborough</td>
                <td>1.410742%</td>
              </tr>
              <tr>
                <td>St. Catherines</td>
                <td>1.421180%</td>
              </tr>
              <tr>
                <td>Sudbury</td>
                <td>1.461888%</td>
              </tr>
              <tr>
                <td>North Bay</td>
                <td>1.501246%</td>
              </tr>
              <tr>
                <td>Sault Ste. Marie</td>
                <td>1.529349%</td>
              </tr>
              <tr>
                <td>Thunder Bay</td>
                <td>1.598484%</td>
              </tr>
              <tr>
                <td>Windsor</td>
                <td>1.789394%</td>
              </tr>
            </table>
          </div>
        </GoogleMapReact>

      </div>
    )
  }
}

export default PropertyTaxMap
