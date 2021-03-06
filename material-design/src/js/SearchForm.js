var SearchForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var q = this.refs.q.state.value;
    if (!q) {
      return;
    }
    this.props.onSearchSubmit({q: q});
    return;
  },
  render: function() {
    return (
      <form className="materialForm" onSubmit={this.handleSubmit}>
          <MaterialTextInput label="Search" icon="mdi-action-search" name="q" ref="q" />
      </form>
    );
  }
});