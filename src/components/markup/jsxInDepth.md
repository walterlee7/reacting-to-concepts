### JSX in Depth

React DOM components expect DOM property names like **className** and **htmlFor**, respectively, instead of *class* and *for*.

React JSX transforms from an XML-like syntax into native JavaScript.

To use a JavaScript expression as an attribute value, wrap the expression in a pair of curly braces **({})** instead of quotes **("")**:

**var person = <Person name={window.isLoggedIn ? window.name : ''} />;**

Omitting the value of an attribute causes JSX to treat it as **true**. To pass **false**, an attribute expression must be used:

**<input type="button" disabled={false} />;**

#### JSX Spread Attributes

Placing properties on a component ahead of time:

**var component = <Component foo={x} bar={y} />;**

Don't mutate props like this because propTypes errors end up with a cryptic stack trace:

- **var component = <Component />;**
- **component.props.foo = x; // bad**
- **component.props.bar = y; // also bad**

Instead, use spread attributes:

- **var props = {};**
- **props.foo = x;**
- **props.bar = y;**
- **var component = <Component {...props} />;**

**...props** passes a copy of props of the object to the component.

It can also be overridden like this:

- **var props = { foo: 'default' };**
- **var component = <Component {...props} foo={'override'} />;**
- **console.log(component.props.foo); // 'override'**

**...** spread operator is supported for arrays in ES6.

#### JSX Gotchas

If you want to display an HTML entity within dynamic content, you will run into double escaping issues as React escapes all the strings you are displaying in order to prevent a wide range of XSS attacks by default.

- // Bad: It displays "First &middot; Second"
- **<div>{'First &middot; Second'}</div>**

There are various ways to work-around this issue. The easiest one is to write Unicode characters directly in JavaScript. You need to make sure that the file is saved as UTF-8 and that the proper UTF-8 directives are set so the browser will display it correctly.

- **<div>{'First \u00b7 Second'}</div>**
- **<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>**
- **<div>{['First ', <span key="middot">&middot;</span>, ' Second']}</div>**

As a last resort, you always have the ability to insert raw HTML.

**<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />**

If you pass properties to native HTML elements that do not exist in the HTML specification, React will not render them. If you want to use a custom attribute, you should prefix it with *data-*.

**<div data-custom-attribute="foo" />**

However, arbitrary attributes are supported on custom elements (those with a hyphen in the tag name or an is="..." attribute).

**<x-my-component custom-attribute="foo" />**

Web Accessibility attributes starting with *aria-* will be rendered properly.

**<div aria-hidden={true} />**

__****__