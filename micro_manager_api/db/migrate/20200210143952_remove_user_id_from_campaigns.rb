class RemoveUserIdFromCampaigns < ActiveRecord::Migration[5.1]
  def change
    remove_column :campaigns, :userId, :integer
  end
end
