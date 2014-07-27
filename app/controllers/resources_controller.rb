class ResourcesController < ApplicationController
  respond_to :json, :html

  def index
    @resources =Resource.all.reverse
    respond_with @resources
  end

  def new
    @resource = Resource.new
  end

  def create
    @resource = Resource.new(params.require(:resource).permit(:topic, :url, :description))
    @resource.user = current_user
    if @resource.save
      respond_to do |format|
        format.html { redirect_to resources_path }
        format.json { render json: @resource, status: :created }
      end
    else
      respond_to do |format|
        format.html { render 'new' } 
        format.json { render json: @resource.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
  end

  def show
  end
end
