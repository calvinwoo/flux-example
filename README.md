# flux-example

A simple "shopping cart" application that serves as a [Flux](http://facebook.github.io/react/docs/flux-overview.html) example.

In an effort to keep things simple, no additional Flux related libraries are used, except for the [default Dispatcher module](https://github.com/facebook/flux) provided by Facebook.

## Description

The UI contains 2 main components:
- ShoppingCart: displays a list of cart items and lets users add new items to the cart
- Notifications: keeps track of how many total items are in the cart

Adding additional items to the cart through the UI will cause this series of events to occur:

1. Send an update request to the cart API
2. Optimistically update the Flux store instead of waiting for a successful API response
3. Publish changes to listeners in the UI compoments

A faux API is implemented using browser localStorage.

Built in ES6 using [Babel](http://babeljs.io/) and [Webpack](http://webpack.github.io/)

## Usage
```
npm install
npm start
```
`webpack-dev-server` should be running the app on [http://localhost:8080/](http://localhost:8080/)
