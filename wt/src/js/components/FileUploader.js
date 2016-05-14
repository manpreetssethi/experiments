var FileUploader = React.createClass({
	getInitialState: function() {
		return {
			uploading: false,
			percentage: 0,
			completed: false,
			interval: null
		};
	},

	startUpload: function() {
		this.setState({
			interval: setInterval(function(){
				this.state.percentage += 0.001;

				if(typeof this.props.onProgress !== 'undefined') {
					this.props.onProgress(this.state.percentage);
				}

				if(this.state.percentage > 1) {
					this.clearInterval();

					if(typeof this.props.onComplete !== 'undefined') {
						this.props.onComplete(null);
					}
				}
			}.bind(this), 1),
			uploading: true
		});
	},

	stopUpload: function() {
		this.clearInterval();

		if(this.props.onStop) {
			this.props.onStop(null);
		}
	},

	clearInterval: function() {
		clearInterval(this.state.interval);
		this.setState({
			interval: null,
			uploading: false
		});
	},

	render: function() {
		return (
			<div className="file-uploader">
				<div className="row">
					<div className="col s12">
						<div className="right">
							<button onClick={this.startUpload}>&#9658;</button>
							<button onClick={this.stopUpload}>&#9724;</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
});