/**
 * Created by manpreet on 12/05/16.
 */
var ArcLoader = React.createClass({
	render: function() {
		// Default className of the main container
		var containerClassName = 'arc-loader';

		// append "display-none" if show is false
		//if(!this.props.show) {
		//	containerClassName += ' hide';
		//}

		// append "completed" to the default className
		// if completed
		if(this.props.completed) {
			containerClassName += ' completed';
		}

		return (
			<div className={containerClassName}>
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
});