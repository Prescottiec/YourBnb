import React from "react";
import { withRouter } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const postId = this.props.post.id;
    this.props.history.push(`/posts/${postId}`);
  }

  render() {
    const { average_rating, description, picture_url } = this.props.post;
    return (
      <div className="post-index-item" onClick={this.handleClick}>
        <div className="index-item-info">
          <span className="index-item-category">Rating:</span>
          <span className="index-item-copy">
            {average_rating || "No reviews yet"}
          </span>
          <span className="index-item-category">Description:</span>
          <span className="index-item-copy">{description}</span>
        </div>
        <img src={picture_url} />
      </div>
    );
  }
}

export default withRouter(PostIndexItem);
