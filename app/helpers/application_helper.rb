module ApplicationHelper

	def title
    base_title = "oliwia way project"
    if @title.nil?
      base_title
    else      "#{base_title} | home "
    end
  end
end