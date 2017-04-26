class UsersearchController < ApplicationController

  def index
    @usersearches = Usersearch.all
    # render json: @usersearches
  end
end
