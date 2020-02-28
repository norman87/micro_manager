class AddWinningMessageToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :winning_message, :string
  end
end
