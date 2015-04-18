var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  loadCommentsFromLocalStorage: function() {
  	var comments;

  	if(localStorage.getItem('comments') == null) {
	  	comments = [];
		localStorage.setItem('comments', JSON.stringify(comments));
  	} else {
  		comments = JSON.parse(localStorage.getItem('comments'));
  	}

  	this.setState({data: comments});
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    comments.unshift(comment);
    this.setState({data: comments});
    localStorage.setItem('comments', JSON.stringify(comments));
  },
  componentDidMount: function() {
  	this.loadCommentsFromLocalStorage();
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        <CommentList data={this.state.data} />
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
);