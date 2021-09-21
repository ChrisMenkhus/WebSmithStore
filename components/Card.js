import styled from 'styled-components';

export function Card(data, formatToCurrency, clickhandler) {
	return (
		<Style className="testtesttest">
			<div id="base_container">
				<div className="card_image" src="/icons/reader-outline.svg"></div>
				<h1 className="card_title">{data.name[0].text}</h1>
				<p className="card_description">{data.description[0].text}</p>
			</div>
			<div className="card_bottom_info_row">
				<h4 className="card_price">{formatToCurrency(data.price)}</h4>
				<h1
					className="card_add_to_cart_button"
					onClick={(e) => {
						clickhandler(e);
					}}>
					Add to cart
				</h1>
				<img
					className="card_cart_logo"
					onClick={(e) => {
						clickhandler(e);
					}}
					src="/icons/cart_logo.svg"
				/>
			</div>
			<div className="more_info_dropdown">
				<h1>more info</h1>
			</div>
		</Style>
	);
}

const Style = styled.div`
	width: 255px;
	/* margin: 0 0.2rem; */
	margin: auto;
	/* margin: 0.5rem; */
	background-color: var(--secondary-bg-color);
	/* padding: 0.4rem; */
	box-shadow: 0px 27px 32px -15px rgba(0, 0, 0, 0.25);
	border-radius: 7px;
	transition: all 0.2s;
	height: 100%;
	overflow: hidden;
	margin-bottom: auto;
	margin-top: 0.5rem;

	margin-left: 0;
	margin-right: 0.33rem;

	display: flex;
	flex-direction: column;

	position: relative;

	min-height: 450px;

	&:hover {
		transform: scale(1.015);
	}

	#base_container {
		padding: 0.2rem;
		height: 100%;
		margin-bottom: auto;
		margin-top: 0;
	}

	.card_image {
		height: 200px;
		width: 100%;
		/* fill: linear-gradient(166deg, rgba(255, 100, 169, 1) 100%, rgba(255, 255, 255, 0) 100%); */
		background: rgb(255, 183, 0);
		background: linear-gradient(166deg, rgba(245, 100, 169, 1) 0%, rgba(255, 130, 0, 1) 100%);
		-webkit-mask-image: url('/icons/reader-outline.svg');
		mask-image: url('/icons/reader-outline.svg');
		mask-position: center;
		mask-size: contain;
		mask-size: 50%;
		mask-repeat: no-repeat;
	}

	.card_title {
		text-align: center;
		font-size: 0.8rem;
		font-weight: 400;
		padding: 0 0.1rem;
	}

	.card_description {
		text-align: center;
		font-size: 0.5rem;
		margin: 0.5rem 0;
	}

	.card_bottom_info_row {
		display: flex;
		flex-direction: row;
		justify-content: bottom;
		align-items: bottom;
		width: 100%;
		height: auto;
		transition: all 0.5s;

		margin-top: auto;
		margin-bottom: 1rem;

		&:hover {
			background-color: var(--tertiary-bg-color);
			color: white;
			/* padding: 0.3rem 0; */
		}

		.card_price {
			font-size: 0.8rem;
			font-weight: 500;
			line-height: 1.4rem;
			margin-left: 0.3rem;
		}
		.card_add_to_cart_button {
			font-size: 0.4rem;
			font-weight: 500;
			line-height: 1.5rem;
			margin-left: auto;
			margin-right: -0.2rem;
			cursor: pointer;
		}

		.card_cart_logo {
			height: 1.5rem;
			width: 1.5rem;
			margin: auto 0;
			border: none;
			padding: 0.2rem;
			cursor: pointer;
		}
	}

	.more_info_dropdown {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		bottom: 0;
		margin-top: auto;
		margin-bottom: 0;
		height: 100%;

		position: absolute;
		bottom: 0;

		height: 1rem;
		padding: 0 0 0.2rem 0;
		cursor: pointer;
		h1 {
			font-weight: 400;
		}
		transition: all 0.5s;
	}

	&:hover > .more_info_dropdown {
		opacity: 1;
		h1 {
			opacity: 1;
		}
	}

	.more_info_dropdown:hover {
		background-color: var(--tertiary-bg-color);
		color: white;
		padding: 0.3rem 0;
	}

	@media only screen and (max-width: 500px) {
		width: auto;
	}
	@media only screen and (max-width: 900px) {
	}
	@media only screen and (max-width: 1400px) {
		width: 239px;
	}
	@media only screen and (min-width: 1700px) {
	}
`;
