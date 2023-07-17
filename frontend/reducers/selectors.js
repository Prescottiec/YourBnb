export const selectPost = ({ posts }, postId) => {
  return posts[postId] || { reviewIds: [] };
};

export const selectReviewsForPost = ({ posts, reviews }, post) => {
  return post.reviewIds.map((reviewId) => reviews[reviewId]);
};

export const asArray = ({ posts }) =>
  Object.keys(posts).map((key) => posts[key]);
