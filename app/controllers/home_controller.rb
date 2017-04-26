class HomeController < ApplicationController
# @userinput = "pizza"
  def create
    @userinput = Usersearch.create(usersearch_params)
    
  #
  #  if userinput
  #    find(:all, :conditions => ['name LIKE ?', "%#{userinput}%"])
  #  else
  #    find(:all)
  #  end
  # end
  #
  # def mapresult
  # end
end
private

def usersearch_params
  params.permit(:title)
end
end
