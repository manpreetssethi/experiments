var MaterialCard = React.createClass({
  render: function() {
    return (
      <div className={"materialCard card "+ this.props.size}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={this.props.image} />
        </div>
        <div className="card-content">
          <span className="card-title grey-text text-darken-4"><h5 className="truncate">{this.props.title}</h5></span>
          <p><a href={this.props.linkUrl}><i className="mdi-av-play-circle-outline small"></i></a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{this.props.revealTitle} <i className="mdi-navigation-close right"></i></span>
          <p>{this.props.revealDescription}</p>
        </div>
      </div>
    );
  }
});