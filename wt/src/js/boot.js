import React from 'react';
import ReactDOM from 'react-dom';
import AppBox from './AppBox';

// When document is ready
$(document).ready(() => {
	// Render the App
	ReactDOM.render(<AppBox />, document.getElementById('app'));
});