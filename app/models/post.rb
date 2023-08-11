class Post < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  # has_many :reviews
  has_many_attached :photos


  # Returns all posts that are within the boundaries
  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat])
      .where("lat > ?", bounds[:southWest][:lat])
      .where("lng > ?", bounds[:southWest][:lng])
      .where("lng < ?", bounds[:northEast][:lng])
  end

end
