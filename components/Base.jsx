import React from 'react';
import cartStore from '../stores/cart-store'
import cartActions from '../actions/cart-actions'
import Notifications from './Notifications.jsx'
import ShoppingCart from './ShoppingCart/ShoppingCart.jsx'

export default class Base extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    cartActions.retrieveInitial()
  }

  render() {
    return (
      <div>
        <Notifications />
        <ShoppingCart />
      </div>
    )
  }
}

React.render(
  <Base />,
  document.getElementById('react-app')
)
