require 'spec_helper'
require_relative '../../modules/download.rb'

RSpec.describe Download do
  # you can describe each method
  describe "print_details" do
    it "contains the class name" do
      download = Download.new(123456, 'foo')
      expect(download.print_details).to include('download')
    end
    it "contains the file_id" do
      download = Download.new(123456, 'foo')

      expect(download.print_details).to include('123456')
    end
   
    it "contains the downloaded_by" do
      allow(Time).to receive(:now).and_return('foo')
      download = Download.new(123456, 'bar')
      expect(download.print_details).to include('bar')
    end

    it "contains the downloaded_at" do
      allow(Time).to receive(:now).and_return('foo')
      download = Download.new(123456, 'foo')
      expect(download.print_details).to include('foo')
    end
  end
end