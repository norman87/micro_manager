class CampaignsController < ApplicationController
  before_action :set_campaign, only: [:show, :update, :destroy]

  # GET /campaigns
  def index
    @campaigns = Campaign.all
    totalCampaignCount = Campaign.count    

    if request.params[:range] == nil
      render json: @campaigns
    else
      startRange = JSON.parse(request.params[:range])[0].to_i
      endRange = JSON.parse(request.params[:range])[1].to_i    
      render json: {total: totalCampaignCount, data: @campaigns[startRange..endRange]}
    end
    # p "HEREEEEEEEE"
    
    # puts request.params
    # p startRange
    # p endRange
    
    
    # render json: @campaigns[startRange..endRange]
    # puts response.body

    # p "RESPONSE HEADER"
    # p response.header
    # p "RESPONSE"
    # p response
    # p "RESPONSE CODE"
    # p response.code

  end

  # GET /campaigns/1
  def show
    render json: @campaign
  end

  # POST /campaigns
  def create
    @campaign = Campaign.new(campaign_params)

    if @campaign.save
      render json: @campaign, status: :created, location: @campaign
    else
      render json: @campaign.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /campaigns/1
  def update
    if @campaign.update(campaign_params)
      render json: @campaign
    else
      render json: @campaign.errors, status: :unprocessable_entity
    end
  end

  # DELETE /campaigns/1
  def destroy
    # if request.params.filter
    # else
    # end
    @campaign.destroy
    render json: @campaign    
  end
  
  # DELETE MANY
  def destroy_many
    puts "LOOK HERE"

    items = JSON.parse(request.params[:filter])["id"]

    for item in items
      Campaign.find(item).destroy
    end

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_campaign
      @campaign = Campaign.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def campaign_params
      params.require(:campaign).permit(:title, :user_id, :startDate, :endDate, :html_head, :html_body)
    end
end
