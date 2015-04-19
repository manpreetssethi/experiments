var MaterialPreloader = React.createClass({
  render: function() {
  	if(this.props.show == false) {
  		return;
  	}
    return (
      	<div className="materialPreloader progress">
  			<div className="indeterminate"></div>
		</div>
    );
  }
});