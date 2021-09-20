// add a new item to an array and map that array to a state variable
export function addItemToCart(newItem, cart, setCart) {
	let tempCart = cart;

	// check to see if item is already in cart
	if (tempCart.filter((e) => e.product_id === newItem.product_id).length > 0) {
		console.log('item already in cart');
	} else {
		tempCart.push(newItem);
		setCart(
			tempCart.map((data, i) => {
				return data;
			})
		);
	}
}

export function getTotalCost(cart) {
	let tempArray = cart.map((data, i) => {
		var currency = data.price;
		var number = Number(currency.replace(/[^0-9\.]+/g, ''));
		number *= data.quantity;
		return number;
	});

	const total = tempArray.reduce((a, b) => a + b, 0);

	return total;
}

export function changeQuantityOfItemInCart(newItem, cart, setCart, add) {
	let tempCart = cart;

	console.log('cart:', tempCart);
	console.log('index:', tempCart[newItem]);

	tempCart[newItem].quantity = add ? tempCart[newItem].quantity + 1 : tempCart[newItem].quantity - 1;

	setCart(
		tempCart.map((data, i) => {
			return data;
		})
	);
}

// remove an item from an array and map that array to a state variable
export function removeItemFromCart(removeItem, cart, setCart) {
	let tempCart = cart;

	let index = tempCart.indexOf(removeItem);
	tempCart.splice(index, 1);
	setCart(
		tempCart.map((data, i) => {
			return data;
		})
	);
}

// open a Stripe cart by passing in an array of objects that have price and quanity props
export async function openCart(cart) {
	const line_items = cart.map((data, i) => ({ price: data.price_id, quantity: data.quantity }));

	if (line_items.length > 0) {
		const options = {
			method: 'POST',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(line_items),
		};
		const res = await fetch('http://localhost:3000/api/checkout_sessions', options);
		const data = await res.json();
		window.location = data.url;
	}
}

// format string (e.g. 499999) to a dollar amount string (e.g. $4,999.99)
export const formatToCurrency = (amount) => {
	return '$' + (amount / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
