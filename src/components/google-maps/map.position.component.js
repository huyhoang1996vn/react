

import React from 'react';
import ReactGoogleMap from './core.map.component';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps/lib';
import MarkerClusterer from 'react-google-maps/lib/addons/MarkerClusterer';

const locationDn = {
    lat: 16.070220,
    lng: 108.153470
};

class MapPosition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bounds: null,
            markers: [],
            center: locationDn,
            position: locationDn,
            zoom: 15,
        };
    }


    componentWillMount() {
        if (this.props.iwDefaultLocation) {
            this.setState(() => {
                this.center = this.props.iwDefaultLocation;
                this.state.position = this.props.iwDefaultLocation;
                return this.state;
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (JSON.stringify(nextProps.iwPosition) !== JSON.stringify(this.props.iwPosition)) {
            const { lat, lng } = nextProps.iwPosition;
            const { stateLat, stateLng } = this.state.center;
            if (stateLat != lat || stateLng != lng) {
                this.setState(() => {
                    this.state.center = nextProps.iwPosition;
                    this.state.position = this.makeMarkerLatLng(lat, lng);
                    return this.state;
                });
            }
        }
    }

    handleMapMounted(map) {
        this._map = map;
    }
    handleBoundsChanged() {
        this.setState({
            bounds: this._map.getBounds(),
            center: this._map.getCenter(),
        });
    }

    handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox;
    }

    handlePlacesChanged() {
        const places = this._searchBox.getPlaces();

        // Add a marker for each place returned from search bar
        const markers = places.map(place => ({
            position: place.geometry.location,
        }));

        // Set markers; set map center to first search result
        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

        this.setState({
            center: mapCenter,
            zoom: 8
        });
    }

    handleZoomChanged() {
        // https://developers.google.com/maps/documentation/javascript/events
        const zoom = this._map.getZoom();
        this.setState({ zoom });
    }

    render() {
        return (
            <div style={this.props.iwStyle || { height: '100%' }}>
                <ReactGoogleMap
                    containerElement={<div style={{ height: '100%' }} />}
                    mapElement={<div style={{ height: '100%' }} />}
                    zoom={this.state.zoom}
                    center={this.state.center}
                    onMapMounted={this.handleMapMounted.bind(this)}
                    onBoundsChanged={this.handleBoundsChanged.bind(this)}
                    bounds={this.state.bounds}
                    onPlacesChanged={this.handlePlacesChanged.bind(this)}
                    onZoomChanged={this.handleZoomChanged.bind(this)}
                >
                    <MarkerClusterer
                        averageCenter
                        enableRetinaIcons
                        gridSize={60}
                    >
                        <Marker
                            position={this.state.position}
                            key={1}
                        />
                    </MarkerClusterer>
                </ReactGoogleMap>
            </div>
        );
    }
}
export default MapPosition;
