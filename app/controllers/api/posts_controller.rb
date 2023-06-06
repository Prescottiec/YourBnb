class Api::PostsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def index
    @posts = Post.all
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

  def post_params
    params.require(:post).permit(:lat, :lng, :description)
  end
end
