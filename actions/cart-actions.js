import appDispatcher from '../dispatcher/app-dispatcher'
import cartApi from '../fake-api/cart'

const CART_UPDATE = 'cart_update'

export default {
  retrieveInitial() {
    cartApi.get().then(cart => {
      appDispatcher.dispatch({
	actionType: CART_UPDATE,
	data: cart
      })
    })
  },
  update(cart) {
    appDispatcher.dispatch({
      actionType: CART_UPDATE,
      data: cart
    })

    cartApi.update(cart)
  }
}
