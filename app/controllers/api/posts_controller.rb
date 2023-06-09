class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    posts = bounds ? Post.in_bounds(bounds) : Post.all

    if params[:minAdults] && params[:maxAdults]
      posts = posts.where(adults: num_adults)
    end

    @posts = posts
    render :index
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.create!(post_params)
    render :show
  end

  private

  def num_adults
    (params[:minAdults]..params[:maxAdults])
  end

  def post_params
    params.require(:post).permit(:lat, :lng, :description, :adult, :photo)
  end

  def bounds
    params[:bounds]
  end
end
