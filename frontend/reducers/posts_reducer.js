import {
  RECEIVE_REVIEW,
  RECEIVE_POSTS,
  RECEIVE_POST,
} from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      const newPost = { [action.post.id]: action.post };
      return Object.assign({}, state, newPost);
    case RECEIVE_REVIEW:
      const { review, average_rating } = action;
      const newState = Object.assign({}, state);
      newState[review.post_id].reviewIds.push(review.id);
      newState[review.post_id].average_rating = average_rating;
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
