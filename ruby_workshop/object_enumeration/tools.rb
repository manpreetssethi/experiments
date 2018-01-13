class Toolbox
  include Enumerable

  def initialize(name)
    @name = name
    @tools = []
  end

  def add_tool(tool)
    @tools << tool
  end

  def each(&block)
    return @tools.to_enum unless block

    @tools.each do |tool|
      block.call(tool)
    end
  end
end

toolbox = Toolbox.new('my toolbox')
toolbox.add_tool('foo')
toolbox.add_tool('bar')
toolbox.add_tool('baz')

toolbox.each { |tool| puts tool }