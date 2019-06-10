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

In React, an owner is the component that sets the props of other components.

**<Parent><Child /></Parent>**

Parent can read its children by accessing the special this.props.children prop.

this.props.children is an opaque data structure.

Reconciliation is the process by which React updates the DOM with each new render pass. In general, children are reconciled according to the order in which they are rendered.

However, for stateful components that maintain data in this.state across render passes, this can be very problematic, so elements that need to be destroyed on future renders can be display:'none'.

In cases where the identity and state of each child must be maintained across render passes, you can uniquely identify each child by assigning it a **key**.

The key should always be supplied directly to the components in the array, not to the container HTML child of each component in the array.

**{this.props.results.map(function(result) {
           return <ListItemWrapper key={result.id} data={result}/>;
})}**

You can also key children by passing a ReactFragment object.

If shouldComponentUpdate() returns false when data has actually changed, React can't keep your UI in sync. Be sure you know what you're doing while using it, and only use this function when you have a noticeable performance problem. Don't underestimate how fast JavaScript is relative to the DOM.

### Reusable Components

__****__