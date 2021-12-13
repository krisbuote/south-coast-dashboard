import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';

import { Wrapper, Status } from "@googlemaps/react-wrapper";

import GoogleMaps from '../GoogleMaps/GoogleMaps';

const API_KEY = '';


export default class Dashboard extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(
        <div className="Dashboard">
          Dashboard
          <div className="google-maps-wrapper">
              <GoogleMaps />
          </div>
        </div>
    );
  }
}
