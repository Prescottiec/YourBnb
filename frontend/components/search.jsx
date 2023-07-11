import React from "react";

import PostIndex from "./post_index";
import PostMap from "./post_map";

const Search = ({ posts, minAdults, maxAdults, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Post!</h5>
      <PostMap posts={posts} />
    </div>
    <div className="right-half">
      <PostIndex posts={posts} />
    </div>
    <PostIndex posts={posts} />
  </div>
);

export default Search;
