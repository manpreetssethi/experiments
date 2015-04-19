var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var SearchResults = React.createClass({
  render: function() {
    var resultNodes = [];
    for(var i in this.props.data) {
      resultNodes.push(<SearchResult data={this.props.data[i]} />);
    }
    return (
      <div className="searchResults">
        <ReactCSSTransitionGroup transitionName="example">
          {resultNodes}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});