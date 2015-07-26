/**
 * A fake API that uses browser localStorage.
 *
 * Pretend that this module is actually making AJAX requests to some API with a shopping cart list.
 */
export default {
	get() {
		return new Promise((resolve, reject) => {
			// If the "cart" is initially empty, populate it with some good films.
			if (!localStorage['fakeCart']) {
				localStorage['fakeCart'] = JSON.stringify([
					{title: 'Chinatown'},
					{title: '2001: A Space Odyssey'}
				])
			}

			resolve(JSON.parse(localStorage['fakeCart']))
		})
	},
	update(cart) {
		return new Promise((resolve, reject) => {
			localStorage['fakeCart'] = JSON.stringify(cart)

			resolve()
		})
	}
}
