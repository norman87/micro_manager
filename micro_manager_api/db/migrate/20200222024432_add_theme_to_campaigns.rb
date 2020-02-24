class AddThemeToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :theme, :string
  end
end
