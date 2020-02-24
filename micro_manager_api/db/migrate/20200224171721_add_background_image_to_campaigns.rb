class AddBackgroundImageToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :background_image, :string
  end
end
