import React from 'react';

/**
 * Abstracts HTML Canvas container as a React Component
 */
class CustomCanvas extends React.Component {
	/**
	 * Paint when component mounts
	 */
	componentDidMount() {
		this.paint();
	}

	/**
	 * Paint when component's properties are updated
	 */
	componentDidUpdate() {
		this.paint();
	}

	/**
	 * Draws in Canvas based on props
	 * Will draw an Arc if 'arcSpecs' is provided in props
	 */
	paint() {
		if(typeof this.props.arcSpecs !== 'undefined') {
			this.paintArc(this._canvas.getContext('2d'), this.props.arcSpecs);
		}
	}

	/**
	 * Draws an Arc in Canvas
	 * @param {object} [name="context"] - '2d' context of Canvas
	 * @param {object} [name="specs"] - Standard specifications to draw an Arc (http://www.w3schools.com/tags/canvas_arc.asp)
	 */
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

	/**
	 * Renders a native Canvas element
	 */
	render() {
		return (<canvas width={this.props.width} height={this.props.height} ref={(c) => this._canvas = c} />);
	}
}

export default CustomCanvas;
