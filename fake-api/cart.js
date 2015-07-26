export default {
	get() {
		return new Promise((resolve, reject) => {
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
