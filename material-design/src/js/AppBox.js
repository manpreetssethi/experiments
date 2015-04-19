var spotifyApi = new SpotifyWebApi();

var AppBox = React.createClass({
  getInitialState: function() {
    return {data: {searchResults: []}};
  },
  handleSubmit: function(formData) {
	spotifyApi
		.searchTracks(formData.q)
		.then(
			this.handleSearchResults,
			this.handleErrorInSearch
		);
  },
  handleSearchResults: function(results) {
  	if(typeof results.tracks == 'undefined') {
  		return;
  	}
  	
  	this.setState({data: {
  		searchResults: results.tracks.items
  	}});
  },
  handleErrorInSearch: function(err) {
  	this.replaceState({searching: false});
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
				<SearchResults data={this.state.data.searchResults}/>
			</div>
      </div>
    );
  }
});

React.render(
  <AppBox />,
  document.getElementById('app')
);