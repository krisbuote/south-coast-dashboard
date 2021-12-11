import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './GoogleMaps.css';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};


export class GoogleMaps extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  mapClicked(mapProps, map, clickEvent) {
    console.log(map)
    console.log("Another");
    console.log(clickEvent.latLng.lat())
    console.log(clickEvent.latLng.lng())
  }

  zoomChanged(m,magain,event) {
    console.log(m,magain,event);
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={10}
        style={mapStyles}
        initialCenter={
          {
            lat: 49.7016,
            lng: -123.1558
          }
        }
        onZoomChanged={this.zoomChanged}
      >
      <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: 49.7016, lng: -123.1558}}
        onClick={this.mapClicked} /> 
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyVaiyCnePVd_Vyy5Sr0tdJqv3ATzsLG4'
})(GoogleMaps);
