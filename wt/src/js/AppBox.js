import React from 'react';
import UploadForm from './components/UploadForm';

class AppBox extends React.Component {
	render() {
		return (
			<div className="appBox">
				<UploadForm />
			</div>
		);
	}
}

export default AppBox;