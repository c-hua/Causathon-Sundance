class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "You have signed up successfully"
      session[:remember_token] = @user.id
      @current_user = @user
      redirect_to resources_path
    else
      render :new
    end
  end

  protected

  def user_params
    params.require(:user).permit(:name, :email, :password, :is_admin)
  end
end