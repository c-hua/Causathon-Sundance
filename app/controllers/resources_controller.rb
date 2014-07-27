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
    @resource = Resource.new(params.require(:resource).permit(:organization, :resource, :description, :category, :platform, :supporting, :gender, :url, :location, :application_type, :deadlines, :additional, :production_stage, :cost, :targeting, :ethnicityspeciic, :address, :ethnicity, :picture))
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
    @resource = Resource.find(params[:id])
  end


  def update
    @resource = Resource.find(params[:id])

    if @resource.update_attributes(params.require(:resource).permit(:topic, :url, :description))
      respond_to do |format|
        format.html { redirect_to resources_path } 
        format.json { render nothing: true, status: :no_content }
      end
    else
      respond_to do |format|
        format.html { render 'edit' } 
        format.json { render json: @resource.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy

    @resource = Resource.find(params[:id])
    @resource.destroy
      respond_to do |format|
        format.html { redirect_to :root }
        format.json { render json: {head: :ok} }
      end
  end

  def show
    @resource = Resource.find(params[:id])
    respond_with @resource
  end
end
