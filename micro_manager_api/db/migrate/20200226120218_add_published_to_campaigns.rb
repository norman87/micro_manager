class AddPublishedToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :published, :boolean
  end
end
