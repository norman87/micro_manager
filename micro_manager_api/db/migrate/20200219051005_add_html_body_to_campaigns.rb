class AddHtmlBodyToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :html_body, :string
  end
end
