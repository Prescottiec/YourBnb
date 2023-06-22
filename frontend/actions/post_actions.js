import * as APIUtil from '../util/post_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts,
});

export const receivePost = ({ post, reviews, authors }) => ({
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

export const fetchPosts = filters => dispatch => (
  APIUtil.fetchPosts(filters).then(posts => (
    dispatch(receivePosts(posts))
  ))
);

export const fetchPost = id => dispatch => (
  APIUtil.fetchPost(id).then(payload => (
    dispatch(receivePost(payload))
  ))
);

export const createPost = post => dispatch => (
  APIUtil.createPost(post).then(post => (
    dispatch(receivePost(post))
  ))
);
