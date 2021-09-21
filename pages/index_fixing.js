import { useEffect, useState } from 'react';
import { formatToCurrency, addItemToCart, removeItemFromCart, openCart, changeQuantityOfItemInCart } from '../utils';
import { saveToLocalStorage, resetLocalStorage, setStateFromLocalStorage, resize } from '../utils';
import Prismic from '@prismicio/client';
import { Client } from '../prismic-config';
import Head from 'next/head';
import { Nav, PageWrapper, Container, Card, Button, BannerImage, SearchBar, FlexWrap } from '../components';
import { ShoppingCart } from '../components/ShoppingCart';

// Page that is rendered at '/'
export default function Home({ document }) {
	// State variables (When these change the dom is re-rendered)
	const [products, setProducts] = useState([]);
	const [shoppingCart, setShoppingCart] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [cartOpen, setCartOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [searchText, setSearchText] = useState('');

	resize(setIsMobile, 1100);

	function updateFilter(value) {
		setSearchText(value.toString());
		let tempArray = [];
		products.forEach((data) => {
			data.name[0].text.toLowerCase().includes(value.toString().toLowerCase()) ||
			data.description[0].text.toLowerCase().includes(value.toString().toLowerCase())
				? tempArray.push(data)
				: null;
		});
		setFilteredProducts(tempArray);
	}

	// Constructor (This only runs once)
	useEffect(() => {
		console.log('THIS IS A RENDER BRUV');
		// Update state variable products with data from getServerSideProps function
		setProducts(
			document.results.map((data, i) => {
				return data.data;
			})
		);
		setFilteredProducts(
			document.results.map((data, i) => {
				return data.data;
			})
		);
		// Set state variable shopping cart to local storage variable if there is one
		setStateFromLocalStorage(setShoppingCart);
	}, []);

	// Save state variable shopping cart to local storage whenever it is modified
	useEffect(() => {
		saveToLocalStorage(shoppingCart);
	}, [shoppingCart]);

	function ProductsView() {
		return <Container id="products_view" direction="column" maxWidth="800px" height="100%"></Container>;
	}

	return (
		<>
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Rozha+One&display=swap" rel="stylesheet" />
				<link rel="preload" href="/fonts/Post No Bills Jaffna ExtraBold 800.ttf" as="font" crossOrigin="" />
			</Head>
			<Nav
				className="TESTTESTTESTTEST"
				cartOpen={cartOpen}
				setCartOpen={setCartOpen}
				amountOfItemsInCart={shoppingCart.length > 0 ? shoppingCart.length : ''}
			/>
			<PageWrapper>
				<main>{isMobile ? !cartOpen ? <ProductsView /> : null : <ProductsView />}</main>
				<aside>
					{cartOpen ? (
						<Container
							id="shopping_cart_view"
							direction="column"
							backgroundColor="#eff0f1"
							maxWidth="500px"
							height="auto"
							width="100%"
							minWidth="300px"
							maxWidth="500px"
							wrap="none">
							<ShoppingCart
								shoppingCart={shoppingCart}
								setShoppingCart={setShoppingCart}
								cartOpen={cartOpen}
								setCartOpen={setCartOpen}
								removeItemFromCart={removeItemFromCart}
								openCart={openCart}
								changeQuantityOfItemInCart={changeQuantityOfItemInCart}
							/>
						</Container>
					) : null}
				</aside>
			</PageWrapper>
		</>
	);
}

// Get data from API and provide it as props
export async function getServerSideProps() {
	const document = await Client().query(Prismic.Predicates.at('document.type', 'product'));

	return {
		props: { document },
	};
}
