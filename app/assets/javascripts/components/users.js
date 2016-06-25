this.Users = React.createClass({
  getInitialState: function() {
    return {
      users: this.props.data
    };
  },
  getDefaultProps: function() {
    return {
      users: []
    };
  },
  render: function() {
    var user;
    return React.DOM.div({
      className: 'users'
    }, React.DOM.h2({
      className: 'title'
    }, 'Users'), React.DOM.table({
      className: 'table table-bordered'
    }, React.DOM.thead(null, React.DOM.tr(null, React.DOM.th(null, 'Name'), React.DOM.th(null, 'Email'), React.DOM.th(null, 'Phone'))), React.DOM.tbody(null, (function() {
      var i, len, ref, results;
      ref = this.state.users;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        record = ref[i];
        results.push(React.createElement(User, {
          key: record.id,
          record: record
        }));
      }
      return results;
    }).call(this))));
  }
});
