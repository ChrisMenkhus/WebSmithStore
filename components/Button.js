import styled from 'styled-components';

export function Button(p) {
	return (
		<Style onClick={p.onClick} align={p.align}>
			<span>{p.children}</span>
		</Style>
	);
}

const Style = styled.div`
	color: white;
	height: 1rem;
	padding: 0.2rem;
	font-size: 0.6rem;
	position: relative;
	color: white;
	padding: 0 0.2rem;
	text-align: ${(p) => (p.align ? p.align : 'left')};
	font-weight: 100;
	font-size: 0.5rem;
	width: 3rem;
	line-height: 0.9rem;
	transition: all 0.1s;
	cursor: pointer;
	position: relative;

	box-shadow: 0px 8px 12px -8px rgba(0, 0, 0, 0.5);

	/*

	&:hover {
		width: 3.1rem;

		width: 0;
	}

	&:before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 3rem;
		height: 0.9rem;
		background-color: var(--tertiary-bg-color);
	}

	span {
		z-index: 2;
		color: white;
		border: 4px solid red;
	} */

	span {
		color: white;
		height: 1rem;
		font-size: 0.5rem;
		position: relative;
		z-index: 2;
		line-height: 1rem;
	}

	&:before {
		content: '';
		height: 1rem;
		width: 100%;
		position: absolute;
		left: 50%;
		bottom: 50%;
		transform: translate(-50%, 50%);

		background-color: var(--tertiary-bg-color);
		transition: all 0.2s;
	}

	&:after {
		content: '';
		height: 1rem;
		width: 0.5rem;
		width: 0;
		width: 0%;
		/* width: 100%;
		border-radius: 7px; */

		position: absolute;
		left: 50%;
		bottom: 50%;
		transform: translate(-50%, 50%);
		background: rgb(255, 183, 0);
		background: linear-gradient(166deg, rgba(245, 100, 169, 1) 0%, rgba(255, 130, 0, 1) 100%);
		transition: all 0.3s;
	}

	&:hover {
		&:before {
			z-index: 2;
			height: 0.8rem;
			border-radius: 0;
		}
		span {
		}
		&:after {
			width: 100%;
			border-radius: 0;
			z-index: 1;
		}
	}

	@media only screen and (max-width: 500px) {
	}
	@media only screen and (max-width: 900px) {
		text-align: center;
	}
	@media only screen and (max-width: 1700px) {
	}
	@media only screen and (min-width: 1700px) {
	}
`;
