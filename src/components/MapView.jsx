import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Map, Popup, TileLayer, Polygon } from 'react-leaflet';
import Fetch from 'react-fetch';
import data from '../data.json';

export const MapView = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },
  mixins: [PureRenderMixin],
  getInitialState() {
    return {
      data
    };
  },
  getPopupContent(d) {
    return d.properties.text;
  },
  render() {
    const center = { lat: 59.938043, lng: 30.337157 };
    const zoom = 9;

    return (
      <div>
        <GoogleMap
          defaultCenter={center}
          defaultZoom={zoom}
        />
      </div>
    );
  }
});

export const MapViewContainer = React.createClass({
  mixins: [PureRenderMixin],
  onSuccessCallback(json) {
    console.log('SUCCESS json');
    console.log(json);
  },
  onErrorCallback(json) {
    console.log('ERROR json');
    console.log(json);
  },
  render() {
    const options = {
      mode: 'no-cors'
    };

    return (
      <Fetch
        url="http://odwe.ca/sites/default/files/WIFFsched.json"
        options={options}
        onSuccess={this.onSuccessCallback}
        onError={this.onErrorCallback}
      >
        <MapView />
      </Fetch>
    );
  }
});
