class AddLuckyStringToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :lucky_string, :string
  end
end
