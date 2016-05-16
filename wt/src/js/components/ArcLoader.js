import React from 'react';
import CustomCanvas from './CustomCanvas';

/**
 * Draws an Arc using Canvas to show feedback to the user
 */
class ArcLoader extends React.Component {
	/**
	 * Renders HTML and uses CustomCanvas component
	 * Can have either a progress or a completed state
	 * Shows a number in the center indicating the percentage of Arc drawn
	 */
	render() {
		// Default className of the main container
		var containerClassNames = ['arc-loader'];

		// append "completed" to the default className
		// if completed
		if(this.props.completed) {
			containerClassNames.push('completed');
		}

		return (
			<div className={containerClassNames.join(' ')}>
				<div className="row">
					<div className="col-lg-12">
						<CustomCanvas width={this.props.width} height={this.props.height} arcSpecs={this.props.specs} />
					</div>
				</div>
				<div className="al-progress-label al-label">
					<div className="row">
						<div className="col-lg-12">{this.props.percentageCompleted}<span>%</span></div>
					</div>
				</div>
				<div className="al-completed-label al-label">
					<div className="row">
						<div className="col-lg-12">&#10003;</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ArcLoader;