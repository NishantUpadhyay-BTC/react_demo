this.User = React.createClass({
  render: function() {
   return React.DOM.tr(null, React.DOM.td(null, this.props.record.name), React.DOM.td(null, this.props.record.email), React.DOM.td(null, this.props.record.phone));
  }
});
