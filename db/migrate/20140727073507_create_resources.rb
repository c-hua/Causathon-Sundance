class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.string :organization
      t.string :resource
      t.string :description
      t.string :category
      t.string :platform
      t.string :supporting
      t.string :gender
      t.string :url
      t.string :location
      t.string :application_type
      t.string :deadlines
      t.string :additional
      t.string :production_stage
      t.string :cost
      t.string :targeting
      t.string :ethnicityspecific
      t.string :address
      t.string :ethnicity
      t.string :picture

      t.timestamps
    end
  end
end
