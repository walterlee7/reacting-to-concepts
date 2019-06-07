### JSX in Depth

React DOM components expect DOM property names like **className** and **htmlFor**, respectively, instead of *class* and *for*.

React JSX transforms from an XML-like syntax into native JavaScript.

To use a JavaScript expression as an attribute value, wrap the expression in a pair of curly braces **({})** instead of quotes **("")**:

**var person = <Person name={window.isLoggedIn ? window.name : ''} />;**

Omitting the value of an attribute causes JSX to treat it as **true**. To pass **false**, an attribute expression must be used:

**<input type="button" disabled={false} />;**

__****__