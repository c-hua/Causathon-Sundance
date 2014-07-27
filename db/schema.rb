# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140727080740) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "resources", force: true do |t|
    t.string   "organization"
    t.string   "resource"
    t.string   "description"
    t.string   "category"
    t.string   "platform"
    t.string   "supporting"
    t.string   "gender"
    t.string   "url"
    t.string   "location"
    t.string   "application_type"
    t.string   "deadlines"
    t.string   "additional"
    t.string   "production_stage"
    t.string   "cost"
    t.string   "targeting"
    t.string   "ethnicityspecific"
    t.string   "address"
    t.string   "ethnicity"
    t.string   "picture"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
