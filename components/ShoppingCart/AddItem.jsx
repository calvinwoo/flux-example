import React from 'react';
import cartActions from '../../actions/cart-actions'

export default class AddItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: null
    }
  }

  addItem() {
    cartActions.update(this.props.cart.concat(this.state.newItem))
  }

  render() {
    return (
      <div>
        <input
          type='text'
          onChange={event => {
            this.setState({
              newItem: {title: event.target.value}
            })
          }}
        />

        <button onClick={this.addItem.bind(this)}>Add</button>
      </div>
    )
  }
}
