import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 13,
};

class PostMap extends React.Component {
  componentDidMount() {
    // set the map to show SF
    // const mapOptions = {
    //   center: { lat: 37.7758, lng: -122.435 }, // this is SF
    //   zoom: 13,
    // };

    // wrap this.mapNode in a Google Map
    // this.map = new google.maps.Map(this.mapNode, mapOptions);
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
  }

  render() {
    return (
      <div className="map-container" ref="map" id="map-container">
        Map
      </div>
    );
  }
}

export default withRouter(PostMap);
