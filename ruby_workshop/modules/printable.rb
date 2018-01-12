module Printable
  def print_details
    message = "I am \"#{self.class.name}\", my file_id is #{@file_id}, my uploaded_at is #{@uploaded_at}"
    if @downloaded_by
      message += ", my downloaded_by is \"#{@downloaded_by}\""
    end

    message
  end
end