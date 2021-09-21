import styled from 'styled-components';

export function Nav(p) {
	return (
		<Nav_Style>
			<nav>
				<div className="margin_auto" id="website_name">
					Websmith.<span>store</span>
				</div>
				<div className="margin_auto" id="nav_logo_container">
					<img onClick={() => p.setCartOpen(!p.cartOpen)} id="cart_logo" src="/icons/cart_logo.svg" alt="Cart Logo" />
					<div id="cart_items_indicator">{p.amountOfItemsInCart ? p.amountOfItemsInCart : '0'}</div>
				</div>
			</nav>
		</Nav_Style>
	);
}

const Nav_Style = styled.div`
	position: fixed;
	z-index: 2;
	nav {
		width: 100%;
		background-color: var(--secondary-bg-color);
		display: flex;
		flex-direction: row;
		height: 2rem;
		width: 100vw;
	}
	.margin_auto {
		margin: auto;
	}
	#nav_logo_container {
		position: relative;
		width: auto;
		margin-left: auto;
		margin-right: 0.9rem;
		width: 2rem;
		height: 1rem;
	}
	#website_name {
		margin-right: auto;
		margin-left: 0.5rem;
		font-family: 'Post No Bills Jaffna', serif;
		font-size: 1.3rem;
		line-height: 2rem;
		margin-top: 0.15rem;
	}
	#website_name span {
		font-size: 0.8rem;
	}
	#cart_logo {
		height: 1.4rem;
		width: 1.4rem;
		padding: 0.1rem;
		margin-right: 0.3rem;
	}
	#cart_items_indicator {
		height: 0.8rem;
		width: 0.8rem;
		text-align: center;
		color: white;
		line-height: 0.7rem;
		font-size: 0.7rem;
		border-radius: 50%;
		background-color: var(--secondary-font-color);
		position: absolute;
		right: 0;
		top: 0;
	}

	@media only screen and (max-width: 500px) {
		#website_name {
			font-size: 0.9rem;
		}
		#nav_logo_container {
			margin-right: 0.5rem;
		}
	}
	@media only screen and (max-width: 1700px) {
	}
	@media only screen and (min-width: 1700px) {
	}
`;
