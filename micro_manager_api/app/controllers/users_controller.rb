class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all
    
    totalUserCount = @users.count
    p "REQUESTTTTT"
    p request.params
    p request.params[:range]
    
    if request.params[:range] == nil
      render json: @users
    else
      startRange = JSON.parse(request.params[:range])[0].to_i
      endRange = JSON.parse(request.params[:range])[1].to_i   
      render json: {total: totalUserCount, data: @users[startRange..endRange]}

    end

  end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:name, :email)
    end
end
