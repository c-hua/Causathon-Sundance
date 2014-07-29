class SessionsController < ApplicationController

    def index
    @users = User.all
  end

 def new
  end
  
 def create
    @user = User.where(:email => params[:session][:email]).first

    if @user == nil || !@user.authenticate(params[:session][:password])
      flash[:error] = "Invalid email/password combination"
      render 'new'
    else
     # raise @user.id.to_s
      session[:remember_token] = @user.id.to_s
      redirect_to resources_path
    end
  end


  def destroy
    session.delete(:remember_token)
    redirect_to resources_path
  end
end