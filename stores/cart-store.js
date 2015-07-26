import {EventEmitter} from 'events'
import appDispatcher from '../dispatcher/app-dispatcher'

const CHANGE_EVENT = 'change'
const CART_UPDATE = 'cart_update'

let cart = []

let update = updatedCart => {
  cart = updatedCart
}

let cartStore = Object.assign({}, EventEmitter.prototype, {
  get() {
    return cart
  },
  emitChange() {
    this.emit(CHANGE_EVENT)
  },
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback)
  },
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },
})

appDispatcher.register(action => {
  switch(action.actionType) {
    case CART_UPDATE:
      update(action.data)
      cartStore.emitChange()
    default:
      // no op
  }
})

export default cartStore
