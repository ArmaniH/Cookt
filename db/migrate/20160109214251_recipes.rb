class Recipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
         t.column :title, :string, :limit => 100, :null => false
         t.string :healthLabels
         t.string :ingredients
         t.column :subject_id, :integer
         t.column :description, :text
         t.column :created_at, :timestamp
      end
   end

   def self.down
      drop_table :recipes
   end
end
