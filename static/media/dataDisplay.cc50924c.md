### Data Displaying...

Inputs into a component is called **props** short for properties.

Props aka **this.props** is treated as immutable within a component.

Never write to **this.props**.

React components are akined to simple functions that take in **props**, **state**, and **render HTML**.

React components can only render a **single html element**.

Multiple html elements must be wrapped in a single html element.

JSX lets you create JavaScript objects using HTML syntax:

**React.createElement('a', {href: 'somewebsite.com'}, 'Hello!').**

This becomes:

**<a href="somewebsite.com">Hello!</a>**

**JSX is not required to use React.**

You can create React elements with plain JavaScript.

You can create React elements in plain JavaScript using **React.createElement**, which takes:
- a tag name or component,
- a properties object,
- a variable number of optional child arguments.

__****__