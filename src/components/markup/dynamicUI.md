### Interactivity and Dynamic UIs

Event handlers are passed as camelCased props similar to normal HTML.

**Autobinding**: When creating callbacks in JavaScript, you usually need to explicitly bind a method to its instance such that the value of this is correct. With React, every method is automatically bound to its component instance (except when using ES6 class syntax). React caches the bound method such that it's extremely CPU and memory efficient.

**Event delegation**: React doesn't actually attach event handlers to the nodes themselves. When React starts up, it starts listening for all events at the top level using a single event listener. When a component is mounted or unmounted, the event handlers are simply added or removed from an internal mapping. When an event occurs, React knows how to dispatch it using this mapping. When there are no event handlers left in the mapping, React's event handlers are simple no-ops.

In React, you simply update a component's state, and then render a new UI based on this new state.

A common way to inform React of a data change is by calling setState(data, callback). This method merges data into this.state and re-renders the component. When the component finishes re-rendering, the optional callback is called. Most of the time you'll never need to provide a callback since React will take care of keeping your UI up-to-date for you.

Try to keep as many of your components as possible stateless.

A common pattern is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props.

State should contain data that a component's event handlers may change to trigger a UI update.

**this.state** should only contain the minimal amount of data needed to represent your UI's state.

**Computed data:** Don't worry about precomputing values based on state — it's easier to ensure that your UI is consistent if you do all computation within render(). For example, if you have an array of list items in state and you want to render the count as a string, simply render this.state.listItems.length + ' list items' in your render() method rather than storing it on state.

__****__

### Multiple Components

<!-- ```
var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <PagePic pagename={this.props.pagename} />
        <PageLink pagename={this.props.pagename} />
      </div>
    );
  }
});

var PagePic = React.createClass({
  render: function() {
    return (
      <img src={'a website' + this.props.pagename + '/picture'} />
    );
  }
});

var PageLink = React.createClass({
  render: function() {
    return (
      <a href={'a website' + this.props.pagename}>
        {this.props.pagename}
      </a>
    );
  }
});

ReactDOM.render(
  <Avatar pagename="Engineering" />,
  document.getElementById('example')
);
``` -->

In React, an owner is the component that sets the props of other components.


__****__