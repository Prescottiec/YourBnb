import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

import MarkerManager from "../../frontend/util/marker_manager";

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 13,
};

class PostMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
  }

  handleMarkerClick(post) {
    this.props.history.push(`posts/${post.id}`);
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
