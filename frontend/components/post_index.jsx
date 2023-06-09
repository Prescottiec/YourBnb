import React from "react";
import PostIndexItem from "./post_index_item";

const PostIndex = ({ posts }) => (
  <div>
    <h1>Posts: </h1>
    {posts.map((post) => (
      <PostIndexItem post={post} key={post.id} />
    ))}
  </div>
);

export default PostIndex;
