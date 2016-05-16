import React from 'react';
import UploadForm from './components/UploadForm';

/**
 * Holds the App, contains all the components
 */
class AppBox extends React.Component {
	/**
	 * Renders HTML, uses UploadForm Component
	 */
	render() {
		return (
			<div className="appBox">
				<UploadForm />
			</div>
		);
	}
}

export default AppBox;