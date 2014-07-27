class ResourceSerializer < ActiveModel::Serializer
  attributes :organization, :resource, :description, :category, :platform, :supporting, :gender, :url, :location, :application_type, :deadlines, :additional, :production_stage, :cost, :targeting, :ethnicityspeciic, :address, :ethnicity, :picture 
end
