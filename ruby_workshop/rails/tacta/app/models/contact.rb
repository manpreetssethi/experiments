class Contact < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  validates :phone, allow_blank: true, length: { in: 5..20 }
  validates :email, allow_blank: true, length: { in: 5..50 }

  validates_format_of :phone, allow_blank: true, :with => /\A[+ 0-9]+$\z/
  validates_format_of :email, allow_blank: true, :with => /@/, message: 'must contain @.'
end
