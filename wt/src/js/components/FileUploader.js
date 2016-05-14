import React from 'react';

class FileUploader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uploading: false,
			percentage: 0,
			completed: false,
			interval: null
		}

		// Apparently React with ES6 doesn't bind "this" to
		// custom methods (https://github.com/goatslacker/alt/issues/283)
		this.startUpload = this.startUpload.bind(this);
		this.stopUpload = this.stopUpload.bind(this);
		this.clearInterval = this.clearInterval.bind(this);
	}

	startUpload() {
		// Already in progress (ignore the clicks)
		if(this.state.uploading) {
			return;
		}

		this.setState({
			interval: setInterval(function(){
				this.state.percentage += 0.0005;

				if(typeof this.props.onProgress !== 'undefined') {
					this.props.onProgress(this.state.percentage);
				}

				if(this.state.percentage > 1) {
					this.clearInterval();

					if(typeof this.props.onComplete !== 'undefined') {
						this.props.onComplete(null);
					}
				}
			}.bind(this), 5),
			uploading: true
		});
	}

	stopUpload() {
		this.clearInterval();

		if(this.props.onStop) {
			this.props.onStop(null);
		}
	}

	clearInterval() {
		clearInterval(this.state.interval);
		this.setState({
			interval: null,
			uploading: false
		});
	}

	render() {
		return (
			<div className="file-uploader">
				<div className="row">
					<div className="col-lg-12">
						<div className="pull-right">
							<button onClick={this.startUpload}>&#9658;</button>
							<button onClick={this.stopUpload}>&#9724;</button>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default FileUploader;