class AddHtmlHeadToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :html_head, :string
  end
end
