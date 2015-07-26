import React from 'react';
import cartStore from '../stores/cart-store'

export default class Notifications extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cart: []
    }
  }

  handleCartChange() {
    this.setState({cart: cartStore.get()})
  }

  componentDidMount() {
    cartStore.addChangeListener(this.handleCartChange.bind(this))
  }

  componentWillUnmount() {
    cartStore.removeChangeListener(this.handleCartChange.bind(this))
  }

  render() {
    return (
      <div>
        <h4>Notifications</h4>
        <div>You have {this.state.cart.length} items in your cart.</div>
      </div>
    );
  }
}
