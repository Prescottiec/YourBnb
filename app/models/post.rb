class Post < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  has_many :reviews
  has_many :favorites
  has_many :favorite_users,
    through: :favorites,
    source: :user
    
end
