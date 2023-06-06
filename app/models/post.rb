class Post < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  has_many :reviews

end
