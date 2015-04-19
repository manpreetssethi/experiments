var SearchResult = React.createClass({
  getInitialState: function() {
    return {data: {
      name: '',  
      image: '',
      uri: '',
      artist: {
        name: '',
        description: ''
      }
    }};
  },
  componentDidMount: function() {
    var image = 'images/placeholder.jpg';
    if(this.props.data.album.images.length > 0) {
      if(typeof this.props.data.album.images[1] != 'undefined') {
        image = this.props.data.album.images[1].url;
      } else {
        image = this.props.data.album.images[0].url;
      }
    }

    var artist = {name: 'Unknown', description: 'Not available'};
    if(typeof this.props.data.artists == 'object') {
      artist.name = this.props.data.artists[0].name;
    }

    this.setState({data: {
      name: this.props.data.name,
      uri: this.props.data.uri,
      image: image,
      artist: artist
    }});
  },
  render: function() {
    return (
      <div className="col s4">
        <MaterialCard
          size="small"
          title={this.state.data.name}
          image={this.state.data.image}
          linkLabel="open"
          linkUrl={this.state.data.uri}
          revealTitle={this.state.data.artist.name}
          revealDescription={this.state.data.artist.description} />
      </div>
    );
  }
});