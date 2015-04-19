var MaterialCard = React.createClass({
  render: function() {
    return (
      <div className={"materialCard card "+ this.props.size}>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={this.props.image} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{this.props.title} <i className="mdi-navigation-more-vert right"></i></span>
          <p><a href={this.props.linkUrl}>{this.props.linkLabel}</a></p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{this.props.revealTitle} <i className="mdi-navigation-close right"></i></span>
          <p>{this.props.revealDescription}</p>
        </div>
      </div>
    );
  }
});