class AddAdultToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :adult, :integer, default: 1, null: false
    add_column :posts, :picture_url, :string
  end
end
