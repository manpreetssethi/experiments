var spotifyApi = new SpotifyWebApi();

var AppBox = React.createClass({
  	getInitialState: function() {
		return {data: [], searching: false};
  	},
  	handleSubmit: function(formData) {
  		this.replaceState({data: [], searching: true});
		
		spotifyApi
			.searchTracks(formData.q)
			.then(
				this.handleSearchResults,
				this.handleErrorInSearch
			);
  	},
  	handleReset: function() {
  		this.replaceState({data: [], searching: false});
  	},
  	handleSearchResults: function(results) {
		if(typeof results.tracks == 'undefined') {
			this.replaceState({data: [], searching: false});
			return;
		}
	
		this.replaceState({data: results.tracks.items, searching: false});
  	},
  	handleErrorInSearch: function(err) {
  		this.replaceState({data: [], searching: false});
  	},
  	render: function() {
		return (
	  		<div className="appBox">
				<div className="row">
					<div className="col s6 offset-s3">
						<MaterialForm onSearchSubmit={this.handleSubmit} />
					</div>
				</div>
				<div className="row">
					{this.state.searching ? <MaterialPreloader show={this.state.searching}/> : null}
					{this.state.data.length > 0 ? <SearchResults data={this.state.data}/> : null}
				</div>
	  		</div>
		);
  	}
});

React.render(
	<AppBox />,
  	document.getElementById('app')
);