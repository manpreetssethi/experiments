var AppBox = React.createClass({
	render: function() {
		return (
			<div className="appBox">
				<UploadForm />
			</div>
		);
	}
});

// When document is ready
$(document).ready(function(){
	// Render the App
	ReactDOM.render(<AppBox />, document.getElementById('app'));
});