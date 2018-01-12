require 'spec_helper'
require_relative '../../modules/upload.rb'

RSpec.describe Upload do
  # you can describe each method
  describe "print_details" do
    it "contains the class name" do
      upload = Upload.new(123456)
      expect(upload.print_details).to include('upload')
    end
    it "contains the file_id" do
      upload = Upload.new(123456)

      expect(upload.print_details).to include('123456')
    end
    it "contains the uploaded_at" do
      allow(Time).to receive(:now).and_return('foo')
      upload = Upload.new(123456)
      expect(upload.print_details).to include('foo')
    end
  end
end