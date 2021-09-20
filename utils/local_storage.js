// save shopping cart to local storage
export function saveToLocalStorage(cart) {
	window.localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// reset local storage of shopping cart
export function resetLocalStorage() {
	window.localStorage.setItem('shoppingCart', []);
}

// update shopping cart with data from local storage
export function setStateFromLocalStorage(setCart) {
	let tempShoppingCart = window.localStorage.getItem('shoppingCart');
	tempShoppingCart ? setCart(JSON.parse(tempShoppingCart)) : console.log('no local storage to set state from');
}
