/** @jsx React.DOM */

var Timeline = React.createClass({
  render: function() {
    var listNodes = this.props.data.map(function (item) {
      return <li>{item.text}</li>;
    });
    return (
      <ul className="Timeline">
        {listNodes}
      </ul>
    );
  }
});
