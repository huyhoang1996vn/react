

import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps/lib';

import SearchBox from 'react-google-maps/lib/places/SearchBox';

const searchBoxStyles = {
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  border: '1px solid transparent',
  width: '240px',
  height: '32px',
  marginTop: '10px',
  padding: '0 12px',
  borderRadius: '1px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  fontSize: '14px',
  outline: 'none',
  textOverflow: 'ellipses',
};

class CoreMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <GoogleMap
        ref={this.props.onMapMounted}
        zoom={this.props.zoom}
        center={this.props.center}
        onBoundsChanged={this.props.onBoundsChanged}
        onZoomChanged={this.props.onZoomChanged}
      >
        {(this.props.iwSearchBox) ?
          <SearchBox
            ref={this.props.onSearchBoxMounted}
            bounds={this.props.bounds}
            onPlacesChanged={this.props.onPlacesChanged}
            inputPlaceholder='Find your places'
            inputStyle={searchBoxStyles}
          /> : ''
        }
        {this.props.children}
      </GoogleMap>
    );
  }
}
export default withGoogleMap(CoreMap)
  ;
