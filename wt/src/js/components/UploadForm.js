import React from 'react';
import ArcLoader from './ArcLoader';
import FileUploader from './FileUploader';

class UploadForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			uploading: false,
			percentageCompleted: 0,
			completed: false,
			arcSpecs: {
				x: 95,
				y: 110,
				radius: 70,
				startAngle: 1.5 * Math.PI,
				endAngle: 1.5 * Math.PI,
				counterClockwise: false,
				lineWidth: 5,
				strokeStyle: '#e1e1e1'
			}
		}


		// Apparently React with ES6 doesn't bind "this" to
		// custom methods (https://github.com/goatslacker/alt/issues/283)
		this.showProgress = this.showProgress.bind(this);
		this.completeUpload = this.completeUpload.bind(this);
	}

	showProgress(percentage) {
		// update state
		this.setState({
			uploading: true,
			percentageCompleted: parseInt(percentage*100),
			arcSpecs: _.extend(this.state.arcSpecs, {
				endAngle: mathUtils.arc.percentageToEndAngle(percentage)
			})
		})
	}

	completeUpload(filename) {
		this.setState({
			completed: true,
			uploading: false
		})
	}

	showError(filename) {}

	render() {
		return (
			<div className="upload-form-container">
				<div className="row">
					<div className="col-lg-12">
						<ArcLoader
							percentageCompleted={this.state.percentageCompleted}
							specs={this.state.arcSpecs}
							width="200"
							height="210"
							completed={this.state.completed}
							/>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6 col-xs-6">
						<p className="ufc-info-label">Press play to emulate a file upload</p>
					</div>
					<div className="col-lg-6 col-md-6 col-xs-6">
						<FileUploader
							onProgress={this.showProgress}
							onError={this.showError}
							onComplete={this.completeUpload}
							/>
					</div>
				</div>
			</div>
		);
	}
}

var mathUtils = {
	arc: {
		percentageToEndAngle: (percentage) => {
			return 2 * Math.PI * percentage - (Math.PI / 2);
		}
	}
};

export default UploadForm;