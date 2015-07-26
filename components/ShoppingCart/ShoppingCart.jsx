import React from 'react';
import cartStore from '../../stores/cart-store'
import cartActions from '../../actions/cart-actions'
import CartList from './CartList.jsx'
import AddItem from './AddItem.jsx'

export default class ShoppingCart extends React.Component {
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
        <h2>Blockbuster Online Rentals</h2>

        <CartList cart={this.state.cart} />
        <AddItem cart={this.state.cart} />
      </div>
    );
  }
}
