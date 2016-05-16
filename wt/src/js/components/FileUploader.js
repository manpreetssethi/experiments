import React from 'react';

/**
 * Abstracts asynchronous file upload functionality
 */
class FileUploader extends React.Component {
	/**
	 * Sets the state & binds member functions with the current context
	 * @param {Object} props
	 * @param {function} props.onProgress 	- callback when upload is in progress and there is a change in the state
	 * @param {function} props.onComplete 	- callback when upload is completed
	 * @param {function} props.onStop 		- callback when upload is stopped manually
	 */
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
		this.upload = this.upload.bind(this);
		this.startUpload = this.startUpload.bind(this);
		this.stopUpload = this.stopUpload.bind(this);
		this.clearInterval = this.clearInterval.bind(this);
	}

	/**
	 * Starts an interval if not already uploading
	 * Sets interval to state
	 * Sets uploading (true) to state
	 */
	startUpload() {
		// Already in progress (ignore the clicks)
		if(this.state.uploading) {
			return;
		}

		// Start interval and set uploading to true
		this.setState({
			interval: setInterval(this.upload, 5),
			uploading: true
		});
	}

	/**
	 * Updates the percentage of completion
	 * Invokes callbacks provided in props
	 */
	upload() {
		this.updatePercentage(0.0005); // Increment the percentage
		this.invokeCallbacks(this.state.percentage, this.state.percentage); // Invoke callbacks
	}

	/**
	 * Updates & increments the percentage in state
	 * @param {number} by - current completion of file upload in percentage
	 */
	updatePercentage(by) {
		this.state.percentage += by;
	}

	/**
	 * Invokes necessary callbacks in the process of upload
	 * @param {number} percentage - current completion of file upload in percentage
	 * @param payload - data required to pass with the callbacks as an argument
	 */
	invokeCallbacks(percentage, payload) {
		// If defined, invoke the callback required on progress
		if(typeof this.props.onProgress !== 'undefined') {
			this.props.onProgress(payload);
		}

		// Simulation complete, end the animation
		if(percentage > 1) {
			this.clearInterval(); // clear the interval

			// If defined, invoke the callback required on complete
			if(typeof this.props.onComplete !== 'undefined') {
				this.props.onComplete(payload);
			}
		}
	}

	/**
	 * Calls a function to clear the interval & invokes onStop callback if passed in properties
	 */
	stopUpload() {
		this.clearInterval();

		if(this.props.onStop) {
			this.props.onStop(null);
		}
	}

	/**
	 * Clears the interval & update the state by nullifying the interval and by setting uploading to false
	 */
	clearInterval() {
		clearInterval(this.state.interval);
		this.setState({
			interval: null,
			uploading: false
		});
	}

	/**
	 * Renders HTML containing two buttons required to start or stop the upload process
	 */
	render() {
		return (
			<div className="file-uploader">
				<div className="row">
					<div className="col-lg-12">
						<div className="pull-right">
							<button title="play" onClick={this.startUpload}>&#9658;</button>
							<button title="pause" onClick={this.stopUpload}>&#9724;</button>
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default FileUploader;