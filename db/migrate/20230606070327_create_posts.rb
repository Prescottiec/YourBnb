class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :description
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
