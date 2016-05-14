/**
 * Created by manpreet on 12/05/16.
 */
var ArcLoader = React.createClass({
	render: function() {
		var containerClassName = 'arc-loader';

		if(this.props.completed) {
			containerClassName += ' completed';
		}

		return (
			<div className={containerClassName}>
				<div className="row">
					<div className="col s12">
						<CustomCanvas width={this.props.width} height={this.props.height} arcSpecs={this.props.specs} />
						<div className="al-progress-label al-label">{this.props.percentageCompleted}%</div>
						<div className="al-completed-label al-label">&#10003;</div>
					</div>
				</div>
			</div>
		);
	}
});