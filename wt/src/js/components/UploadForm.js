var UploadForm = React.createClass({
	getInitialState: function() {
		return {
			uploading: false,
			percentageCompleted: 0,
			completed: false,
			arcSpecs: {
				x: 105,
				y: 110,
				radius: 90,
				startAngle: 1.5 * Math.PI,
				endAngle: 1.5 * Math.PI,
				counterClockwise: false,
				lineWidth: 5,
				strokeStyle: '#e1e1e1'
			}
		};
	},

	handleSubmit: function(e) {
		e.preventDefault();
	},

	showProgress: function(percentage) {
		// update state
		this.setState({
			percentageCompleted: parseInt(percentage*100),
			arcSpecs: Object.assign(this.state.arcSpecs, {
				endAngle: mathUtils.arc.percentageToEndAngle(percentage)
			})
		})
	},

	completeUpload: function(filename) {
		this.setState({
			completed: true
		})
	},

	showError: function(filename) {},

	render: function() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="row">
					<div className="col s12">
						<ArcLoader
							show={this.state.uploading}
							percentageCompleted={this.state.percentageCompleted}
							specs={this.state.arcSpecs}
							width="210"
							height="210"
							completed={this.state.completed}
						/>
					</div>
				</div>
				<div class="row">
					<div class="col s12">
						<FileUploader
							onProgress={this.showProgress}
							onError={this.showError}
							onComplete={this.completeUpload}
						/>
					</div>
				</div>
			</form>
		);
	}
});

var mathUtils = {
	arc: {
		percentageToEndAngle: function(percentage) {
			return 2 * Math.PI * percentage - (Math.PI / 2);
		}
	}
};