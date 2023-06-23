export const fetchPosts = (data) =>
  $.ajax({
    method: "GET",
    url: "api/posts",
    error: (err) => console.log(err)
  });

export const fetchPost = id => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  })
);

export const createReview = review => (
  $.ajax({
    method: 'POST',
    url: 'api/reviews',
    data: { review }
  })
);

export const createPost = postForm => (
  $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: postForm,
    contentType: false,
    processData: false
  })
);
