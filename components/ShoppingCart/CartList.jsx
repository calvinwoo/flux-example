import React from 'react';
import cartStore from '../../stores/cart-store'
import cartActions from '../../actions/cart-actions'

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let items = []
    this.props.cart.forEach(item => {
      items.push(
        <div key={item.title}>{item.title}</div>
      )
    })

    return (
      <div>
        {items}
      </div>
    );
  }
}
