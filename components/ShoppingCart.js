import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTotalCost, formatToCurrency } from '../utils';

export function ShoppingCart(p) {
	const [totalCost, setTotalCost] = useState();

	const { shoppingCart, setShoppingCart, cartOpen, setCartOpen, removeItemFromCart, openCart, changeQuantityOfItemInCart } = p;

	useEffect(() => {
		let tempNum = getTotalCost(shoppingCart);
		setTotalCost(getTotalCost(shoppingCart));

		//is not work
	}, [shoppingCart]);
	return (
		<Style className="TESTTESTTESTTEST">
			<div className="container">
				<div id="shopping_cart_top_section">
					<h1>{shoppingCart ? shoppingCart.length + ' items' : ''} </h1>
					<img onClick={() => setCartOpen(!cartOpen)} src="/icons/close-outline.svg" />
				</div>
				<div id="shopping_cart_grid">
					{shoppingCart.length > 0 ? (
						shoppingCart.map((data, i) => {
							return (
								<div key={i} className="shopping_cart_item">
									<img src="/icons/reader-outline.svg" />
									<div id="cart_item_info">
										<div className="row">
											<h1 id="cart_item_name">{data.name}</h1>
											<img
												id="remove_from_cart_button"
												src="/icons/close-outline-thin.svg"
												onClick={() => removeItemFromCart(data, shoppingCart, setShoppingCart)}
											/>
										</div>
										<h4 id="cart_item_price">{formatToCurrency(Number(data.price.replace(/[^0-9\.]+/g, '')) * data.quantity + '00')}</h4>
										{data.has_quantity ? (
											<div id="cart_button_group">
												<button onClick={() => changeQuantityOfItemInCart(i, shoppingCart, setShoppingCart)}>-</button>
												<span>{shoppingCart[i].quantity}</span>
												<button onClick={() => changeQuantityOfItemInCart(i, shoppingCart, setShoppingCart, true)}>+</button>
											</div>
										) : null}
									</div>
								</div>
							);
						})
					) : (
						<div>add something to your cart</div>
					)}
				</div>
				<div id="shopping_cart_bottom_section">
					<div id="items_row">
						<h1 id="item_count">{shoppingCart ? shoppingCart.length + ' items' : ''} </h1>{' '}
						<h1 id="items_total_cost">{formatToCurrency(totalCost + '00')}</h1>
					</div>
					<div id="total_cost_row">
						<h1>Total</h1> <h1 id="total_cost">{formatToCurrency(totalCost + '00')}</h1>
					</div>
					<button
						id="checkout_button"
						onClick={(e) => {
							openCart(shoppingCart);
						}}>
						<span>continue to checkout</span>
					</button>
				</div>
			</div>
		</Style>
	);
}

const Style = styled.div`
	min-width: 340px;
	width: 100%;
	height: calc(100vh - 2rem);
	background-color: var(--secondary-bg-color);
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: nowrap;
	margin: 0;
	position: fixed;
	width: 10rem;
	bottom: 0;
	right: 0;

	z-index: 5;
	.container {
		width: 100%;
		height: calc(100vh - 2rem);
		background-color: var(--secondary-bg-color);
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0.3rem;
		flex-wrap: nowrap;
		margin: 0;
		max-width: 500px;
	}

	/* .container {
		position: fixed;
		bottom: 0;
		right: 0;
	} */

	@media only screen and (max-width: 1200px) {
		position: fixed;
		bottom: 0;
		left: 0;

		width: 100%;
	}

	#shopping_cart_top_section {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		margin-bottom: auto;
		margin-top: 0rem;
	}

	#shopping_cart_top_section > img {
		height: 1rem;
		width: 1rem;
		margin: auto;
		margin-right: 0;
	}

	#shopping_cart_top_section > h1 {
		line-height: 2rem;
		margin-left: 0.3rem;
	}

	#shopping_cart_grid {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: top;

		height: 100%;
		max-height: 70vh;
		width: 100%;

		font-size: 0.6rem;
		text-align: center;
		overflow-y: scroll;
	}

	#shopping_cart_bottom_section {
		margin-top: auto;
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
	}

	#shopping_cart_bottom_section > button {
		border-radius: 7px;
		color: white;
		height: 1.5rem;
		min-width: 280px;
		margin: 0.5rem;
		font-size: 0.6rem;
		position: relative;
	}

	#shopping_cart_bottom_section > button > span {
		border-radius: 7px;
		color: white;
		height: 1.5rem;
		padding: 0.2rem;
		min-width: 300px;
		margin: 0.5rem;
		font-size: 0.6rem;
		position: relative;
		z-index: 2;
	}

	#shopping_cart_bottom_section > button:before {
		content: '';
		height: 1.5rem;
		width: 0.5rem;
		border-radius: 7px 0 0 7px;
		width: 100%;
		border-radius: 7px;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: var(--tertiary-bg-color);
	}

	#shopping_cart_bottom_section > button:after {
		content: '';
		height: 1.5rem;
		width: 0.5rem;
		border-radius: 7px 0 0 7px;
		/* width: 100%;
		border-radius: 7px; */

		position: absolute;
		left: 0;
		bottom: 0;
		background: rgb(255, 183, 0);
		background: linear-gradient(166deg, rgba(245, 100, 169, 1) 0%, rgba(255, 130, 0, 1) 100%);
		transition: all 0.5s;
	}

	#shopping_cart_bottom_section > button:hover {
		&:after {
			width: 100%;
			border-radius: 7px;
		}
	}

	#shopping_cart_bottom_section > #items_row,
	#total_cost_row {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: left;
	}
	#shopping_cart_bottom_section > #items_row > h1 {
		font-size: 0.7rem;
		font-weight: 400;
	}
	#shopping_cart_bottom_section > #total_cost_row > h1 {
		font-size: 0.8rem;
		font-weight: 600;
	}
	#shopping_cart_bottom_section > #items_row > h1:first-child,
	#total_cost_row > h1:first-child {
		width: 100%;
		text-align: left;
	}
	#shopping_cart_bottom_section > #items_row > h1:last-child,
	#total_cost_row > h1:last-child {
		width: 100%;
		text-align: right;
	}

	#shopping_cart_bottom_section > #total_cost_row {
	}

	#cart_item_info {
		width: 100%;
		display: flex;
		justify-content: top;
		align-items: right;
		flex-direction: column;
		margin: 0;
	}

	.row {
		display: flex;
		flex-direction: row;
		justify-content: top;
		align-items: center;
	}

	#cart_button_group {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		margin: 0;
		padding: 0;
		height: 0.7rem;
		width: 3.5rem;
		margin-left: auto;
		margin-right: 5%;
		margin: 0.1rem 5% 0.3rem auto;
		margin-top: auto;
	}
	#cart_button_group > span {
		background-color: white;
		height: 0.7rem;
		line-height: 0.6rem;
		font-weight: 100;
		font-size: 0.5rem;
	}

	#cart_button_group > button {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		border: none;
		background-color: white;
	}

	#remove_from_cart_button {
		height: 1rem;
		width: 1rem;
		margin: auto;
		margin-right: 0;
		margin-bottom: auto;
		margin-top: 0;
	}

	#cart_button_group > button:first-child {
		border-radius: 20% 0 0 20%;
	}

	#cart_button_group > button:last-child {
		border-radius: 0 20% 20% 0;
	}

	#cart_button_group > h1 {
		margin: 0;
		padding: 0;
		height: 100%;
		width: 100%;
		text-align: center;
		line-height: 0.9rem;
		background-color: white;
	}

	#cart_item_info > button {
	}

	.shopping_cart_item {
		width: auto;

		max-width: 90%;

		height: auto;
		border-bottom: 1px solid black;
		margin: 0.5rem;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: top;
	}

	.shopping_cart_item > img {
		height: auto;
		min-width: 2rem;
		max-width: 3rem;
		margin: 0 auto auto;

		background: rgb(255, 183, 0);
		background: linear-gradient(166deg, rgba(245, 100, 169, 1) 0%, rgba(255, 130, 0, 1) 100%);
		background-size: cover;
		-webkit-mask-image: url('/icons/reader-outline.svg');
		mask-image: url('/icons/reader-outline.svg');
		mask-position: center;
		mask-size: contain;
		mask-size: 80%;
		mask-repeat: no-repeat;
	}

	#cart_item_name {
		font-size: 0.6rem;
		font-weight: 300;
		height: 100%;
		text-align: left;
		flex-wrap: nowrap;
		/* margin: 0.2rem auto 0.2rem 5%; */
	}

	#cart_item_price {
		text-align: right;
		font-weight: 300;
		margin-left: auto;
		margin-right: 5%;

		margin-top: auto;
		margin-bottom: 0.2rem;
	}

	@media only screen and (max-width: 900px) {
		/* width: 100vw;
		height: 100%;
		.container {
			max-width: 400px;
		} */
	}
	@media only screen and (max-width: 1200px) {
	}
`;
