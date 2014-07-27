class CreateResources < ActiveRecord::Migration
  def change
    create_table :resources do |t|
      t.datetime :created_at
      t.datetime :updated
      t.integer :id
      t.string :organization
      t.string :resource
      t.string :description
      t.string :location
      t.string :category
      t.string :supporting
      t.string :gender
      t.string :url
      t.string :location
      t.string :application_type
      t.string :deadline
      t.string :additional
      t.string :production_stage
      t.string :cost
      t.string :targeting
      t.string :ethnicity-specific
      t.string :ethnicity
      t.string :picture

      t.timestamps
    end
  end
end
