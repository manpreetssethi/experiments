import React from 'react';

class CustomCanvas extends React.Component {
	componentDidMount() {
		this.paint();
	}

	componentDidUpdate() {
		this.paint();
	}

	paint() {
		if(typeof this.props.arcSpecs !== 'undefined') {
			this.paintArc(this._canvas.getContext('2d'), this.props.arcSpecs);
		}
	}

	paintArc(context, specs) {
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
	}

	render() {
		return (<canvas width={this.props.width} height={this.props.height} ref={(c) => this._canvas = c} />);
	}
}

export default CustomCanvas;
