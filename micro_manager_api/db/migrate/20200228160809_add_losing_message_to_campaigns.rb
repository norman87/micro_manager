class AddLosingMessageToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :losing_message, :string
  end
end
