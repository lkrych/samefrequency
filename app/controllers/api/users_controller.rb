class Api::UsersController < ApplicationController
  
  def create
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
