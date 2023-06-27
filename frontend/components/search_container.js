import { connect } from "react-redux";

// import { asArray } from "../../reducers/selectors";
import Search from "./search";

const mapStateToProps = (state) => ({
  posts: Object.values(state.entities.posts),
  postId: postId
});

const mapDispatchToProps = (dispatch) => ({
  fetchPost: (postId) => dispatch(fetchPost(postId)),
  deletePost: (postId) => dispatch(deletePost(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
