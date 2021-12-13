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
    console.log(this.props.google);
    this.state = {
      markers: []
    }

    this.mapClicked = this.mapClicked.bind(this);
  }

  setMarkers(lat,lng) {
    var array = [];
    array.push(<Marker position={{lat:lat,lng:lng}} onClick={this.mapClicked}/>)
    this.setState({markers:array})
  }

  markerClicked(mapProps, map, clickEvent) {
    //console.log("A marker was clicked");
  }
 
  mapClicked(mapProps, map, clickEvent) {
    // console.log(map)
    // console.log("Another");
    // console.log(clickEvent.latLng.lat())
    // console.log(clickEvent.latLng.lng())
    console.log(mapProps);
    
    var latlng = new mapProps.google.maps.LatLng(mapProps.initialCenter.lat,mapProps.initialCenter.lng)
    console.log(latlng.lat())
    var bounds = new mapProps.google.maps.LatLngBounds(latlng)
    var ne = bounds.getSouthWest();
    console.log(ne.lat());
    console.log(bounds);
    this.setMarkers(clickEvent.latLng.lat(),clickEvent.latLng.lng());

  }

  zoomChanged(m,magain,event) {
    console.log(m,magain,event);
    console.log(m.google.maps.LatLngBounds(49.7016,123.1558))
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
        onClick={this.mapClicked}
      >
      {/* <Marker
        title={'The marker`s title will appear as a tooltip.'}
        name={'SOMA'}
        position={{lat: 49.7016, lng: -123.1558}}
        onClick={this.mapClicked} />  */}
        {this.state.markers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAyVaiyCnePVd_Vyy5Sr0tdJqv3ATzsLG4'
})(GoogleMaps);
