import styled from 'styled-components';
import { useEffect, useState } from 'react';

export function SearchBar(p) {
	const { products, filteredProducts, setFilteredProducts, searchText, setSearchText, updateFilter } = p;

	return (
		<Style>
			{p.children}
			<img className="logo" id="search_logo" src="/icons/search-outline.svg" />
			{searchText ? (
				<img
					className="logo"
					id="close_logo"
					src="/icons/close-outline.svg"
					onClick={() => {
						updateFilter('');
					}}
				/>
			) : null}
		</Style>
	);
}

const Style = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;

	position: relative;
	input {
		width: 100%;
		font-size: 0.7rem;
		line-height: 1.3rem;
		text-indent: 0.5rem;
		border: 0;
		background: #e1e1e1;
		box-shadow: 0px 8px 18px -9px rgba(0, 0, 0, 0.25);
		text-indent: 1.4rem;
	}

	.logo {
		height: 1.5rem;
		width: 1.5rem;
		margin: auto 0;
		border: none;
		padding: 0.3rem;
		cursor: pointer;
		position: absolute;
	}

	#search_logo {
		position: absolute;
		left: 0;
		opacity: 0.4;
	}

	#close_logo {
		padding: 0.15rem;

		position: absolute;
		right: 0;
		opacity: 0.4;
	}

	@media only screen and (max-width: 900px) {
		max-width: 500px;
	}
	@media only screen and (max-width: 1700px) {
	}
	@media only screen and (min-width: 1700px) {
	}
`;
