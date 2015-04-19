var MaterialTextInput = React.createClass({
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <div className="materialTextInput">
        <div className="input-field">
          <i className={"prefix " + this.props.icon}></i>
          <input id="icon_prefix" type="text" className="validate" name={this.props.name} onChange={this.handleChange} autocomplete="off" />
          <label for="icon_prefix">{this.props.label}</label>
        </div>
      </div>
    );
  }
});