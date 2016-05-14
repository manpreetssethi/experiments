/**
 * Created by manpreet on 12/05/16.
 */
var CustomCanvas = React.createClass({
	componentDidMount: function() {
		this.paint();
	},

	componentDidUpdate: function() {
		this.paint();
	},

	paint: function() {
		if(typeof this.props.arcSpecs !== 'undefined') {
			this.paintArc(this._canvas.getContext('2d'), this.props.arcSpecs);
		}
	},

	paintArc: function(context, specs) {
		// Arc
		context.beginPath();
		context.arc(
			specs.x,
			specs.y,
			specs.radius,
			specs.startAngle,
			specs.endAngle,
			specs.counterClockwise
		);

		// line
		context.lineWidth = specs.lineWidth;
		context.strokeStyle = specs.strokeStyle;context.stroke();
		context.closePath();
	},

	render: function() {
		return (<canvas width={this.props.width} height={this.props.height} ref={(c) => this._canvas = c} />);
	}
});