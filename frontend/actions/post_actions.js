import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

export const receiveBench = ({ post, reviews, authors }) => ({
  type: RECEIVE_POST,
  post,
  reviews,
  authors,
});

export const receiveReview = ({ review, average_rating, author }) => ({
  type: RECEIVE_REVIEW,
  review,
  average_rating,
  author,
});

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(review => (
    dispatch(receiveReview(review))
  ))
);

export const fetchBenches = filters => dispatch => (
  APIUtil.fetchBenches(filters).then(posts => (
    dispatch(receivePosts(posts))
  ))
);

export const fetchBench = id => dispatch => (
  APIUtil.fetchBench(id).then(payload => (
    dispatch(receiveBench(payload))
  ))
);

export const createBench = post => dispatch => (
  APIUtil.createBench(post).then(post => (
    dispatch(receiveBench(post))
  ))
);
