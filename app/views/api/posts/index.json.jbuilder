@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    # json.reviewIds []
  end
end
