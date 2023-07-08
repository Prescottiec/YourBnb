import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";

import MarkerManager from "../../frontend/util/marker_manager";

const getCoordsObj = (latLng) => ({
  lat: latLng.lat(),
  lng: latLng.lng(),
});

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 }, // this is SF
  zoom: 13,
};

class PostMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    if (this.props.singlePost) {
      this.props.fetchPost(this.props.postId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.posts);
    }
  }

  componentDidUpdate() {
    if (this.props.singlePost) {
      const targetPostKey = Object.keys(this.props.posts)[0];
      const targetPost = this.props.posts[targetPostKey];
      this.MarkerManager.updateMarkers([targetPost]); //grabs only that one post
    } else {
      this.MarkerManager.updateMarkers(this.props.posts);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, "idle", () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      this.props.updateBounds("bounds", bounds);
    });
    google.maps.event.addListener(this.map, "click", (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(post) {
    this.props.history.push(`posts/${post.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: "posts/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`,
    });
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
