import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const MapView = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <div>
        Map View
      </div>
    );
  }
});

export const MapViewContainer = React.createClass({
  mixins: [PureRenderMixin],
  render() {
    return (
      <MapView />
    );
  }
});
