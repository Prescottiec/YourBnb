class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(posts) {
    console.log("time to update");
  }

  createMarkerFromPost(post) {
    const position = new google.maps.LatLng(post.lat, post.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      postId: post.id,
    });

    marker.addListener("click", () => this.handleClick(post));
    this.markers[marker.postId] = marker;
  }
}

export default MarkerManager;
