import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";


class PostMap extends React.Component {
  componentDidMount() {
    
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
