import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import {MapContainer} from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

class PropertyTaxMap extends Component {

    render() {
        return (
          <div>
            <h1>Property Tax Heat Map</ h1>
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{lat: 47.444, lng: -122.176}}
            />
          </div>
        );
    }
}

//export default PropertyTaxMap;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCb29b7bfQhT1MTAwDgH54Xj51u7pzFP50'
})(PropertyTaxMap);
