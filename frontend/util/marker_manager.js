class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  updateMarkers(posts) {
    const postsObj = {};
    posts.forEach((post) => (postsObj[post.id] = post));

    posts
      .filter((post) => !this.markers[post.id])
      .forEach((newPost) =>
        this.createMarkerFromPost(newPost, this.handleClick)
      );

    Object.keys(this.markers)
      .filter((postId) => !postsObj[postId])
      .forEach((postId) => this.removeMarker(this.markers[postId]));
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
