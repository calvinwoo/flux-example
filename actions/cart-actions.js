import appDispatcher from '../dispatcher/app-dispatcher'
import cartApi from '../fake-api/cart'

const CART_UPDATE = 'cart_update'

export default {
  // Retrieve cart info from the API, and set Flux up with the initial data.
  retrieveInitial() {
    cartApi.get().then(cart => {
      appDispatcher.dispatch({
	actionType: CART_UPDATE,
	data: cart
      })
    })
  },
  // Send an API request with the new data.
  // At the same time, optimistically update Flux, assuming the request is valid.
  // This gets new information to the components more quickly.
  update(cart) {
    appDispatcher.dispatch({
      actionType: CART_UPDATE,
      data: cart
    })

    cartApi.update(cart)
  }
}
