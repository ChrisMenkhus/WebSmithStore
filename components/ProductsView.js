import { Container, Button, BannerImage, SearchBar, Card } from '.';
import { formatToCurrency } from '../utils';

export default function ProductsView(p) {
	const { products, filteredProducts, setFilteredProducts, searchText, updateFilter, shoppingCart, setShoppingCart, addItemToCart } = p;

	return (
		<Container id="products_view" direction="column" maxWidth="800px" height="100%">
			<Container
				id="contact_buttons"
				height="auto"
				direction="row"
				justify="flex-end"
				align="top"
				childrenMargin="0 0.1rem 0 0"
				margin="3rem 0 0 0">
				<Button buttonStyle="squared" onClick={() => window.open('https://portfolio-git-master-chrismenkhus.vercel.app/home')}>
					Portfolio
				</Button>
				<Button buttonStyle="squared" onClick={() => window.open('https://www.linkedin.com/in/chris-menkhus-ab27201a0/')} align="right">
					Contact
				</Button>
			</Container>
			<Container id="banner" align="top" height="auto">
				<BannerImage src="/icons/websmith_logo.svg" />
			</Container>
			<Container id="products_section" direction="column" height="100%">
				<Container margin="0 0 0.5rem">
					<SearchBar
						products={products}
						filteredProducts={filteredProducts}
						setFilteredProducts={setFilteredProducts}
						searchText={searchText}
						updateFilter={updateFilter}>
						<input
							value={searchText}
							autoFocus={false}
							onChange={(e) => {
								updateFilter(e.target.value);
							}}
							placeholder="search store..."
						/>
					</SearchBar>
				</Container>
				<Container id="filter_buttons" direction="row" justify="flex-start" align="top" height="auto">
					<Button
						onClick={() => {
							updateFilter('');
						}}
						className="squared">
						Clear
					</Button>
					<Button
						onClick={() => {
							updateFilter('CMS');
						}}
						buttonStyle="squared">
						CMS
					</Button>
					<Button
						onClick={() => {
							updateFilter('API');
						}}
						buttonStyle="squared">
						API
					</Button>
					<Button
						onClick={() => {
							updateFilter('Coffee');
						}}
						buttonStyle="squared">
						Coffee
					</Button>
					<Button
						onClick={() => {
							updateFilter('Easy');
						}}
						buttonStyle="squared">
						Easy
					</Button>
				</Container>
				<div id="products_display" wrap="wrap" direction="row" justify="left" align="left" margin="auto auto 5rem auto">
					{filteredProducts
						? filteredProducts.map((data, i) => {
								return Card(data, formatToCurrency, (e) => {
									e.preventDefault();
									addItemToCart(
										{
											name: data.name[0].text,
											price: formatToCurrency(data.price),
											price_id: data.price_id,
											product_id: data.product_id,
											has_quantity: data.has_quantity,
											quantity: 1,
										},
										shoppingCart,
										setShoppingCart
									);
								});
						  })
						: null}
				</div>
			</Container>
		</Container>
	);
}
