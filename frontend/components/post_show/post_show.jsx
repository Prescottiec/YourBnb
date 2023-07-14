import React from "react";
import { Link } from "react-router-dom";

import PostMap from "../post_map/post_map";
import { ProtectedRoute } from "../../util/route_util";

const PostShow = ({ post, postId, fetchPost }) => {
  const posts = {
    [postId]: post,
  };

  return (
    <div className="single-post-show">
      <div className="single-post-map">
        <Link to="/">Back to Posts Index</Link>
        <PostMap
          posts={posts}
          postId={postId}
          singlePost={true}
          fetchPost={fetchPost}
        />
      </div>
      <div className="right-half post-details">
      </div>
    </div>
  );
};

export default PostShow;
