module ApplicationHelper

	def title
    base_title = "welcome to my dream world!"
    if @title.nil?
      base_title
    else      "#{base_title}"
    end
  end
end
