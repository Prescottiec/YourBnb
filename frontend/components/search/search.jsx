import React from "react";

import FilterForm from "./filter_form";
import PostIndex from "../post_index";
import PostMap from "../post_map";

const Search = ({ posts, minAdults, maxAdults, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Post!</h5>
      <PostMap
        posts={posts}
        updateFilter={updateFilter}
        singlePost={false}
      />
    </div>
    <div className="right-half">
      <FilterForm
        minAdults={minAdults}
        maxAdults={maxAdults}
        updateFilter={updateFilter}
      />
      <PostIndex posts={posts} />
    </div>
  </div>
);

export default Search;
