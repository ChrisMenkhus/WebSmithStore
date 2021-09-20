import styled from 'styled-components';

export function Container(p) {
	return (
		<Style
			direction={p.direction}
			align={p.align}
			justify={p.justify}
			margin={p.margin}
			height={p.height}
			width={p.width}
			minWidth={p.minWidth}
			maxHeight={p.maxHeight}
			maxWidth={p.maxWidth}
			minHeight={p.minHeight}
			test={p.test}
			backgroundColor={p.backgroundColor}
			childrenMargin={p.childrenMargin}
			wrap={p.wrap || 'none'}>
			{p.children}
		</Style>
	);
}

const Style = styled.div`
	display: flex;
	flex-direction: ${(p) => (p.direction ? p.direction : 'column')};
	align-items: ${(p) => (p.align ? p.align : 'center')};
	justify-content: ${(p) => (p.justify ? p.justify : 'center')};
	height: ${(p) => (p.height ? p.height : 'auto')};
	width: ${(p) => (p.width ? p.width : '100%')};
	margin: ${(p) => (p.margin ? p.margin : 0)};
	background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : 'none')};
	flex-wrap: ${(p) => (p.wrap ? p.wrap : 'none')};
	max-width: ${(p) => (p.maxWidth ? p.maxWidth : 'none')};
	max-height: ${(p) => (p.maxHeight ? p.maxHeight : 'none')};
	min-height: ${(p) => (p.minHeight ? p.minHeight : 'none')};
	min-width: ${(p) => (p.minWidth ? p.minWidth : 'none')};

	border: ${(p) => (p.test ? '2px dashed orange' : 'none')};

	& > * {
		margin: ${(p) => (p.childrenMargin ? p.childrenMargin : '0 0.05rem')};
	}

	/* flex-wrap: ${(p) => (p.wrap ? p.wrap : 'none')}; */
	@media only screen and (max-width: 900px) {
		justify-content: center;
		max-width: 500px;
	}
	@media only screen and (max-width: 1400px) {
		max-width: 800px;
	}
	@media only screen and (min-width: 1700px) {
	}
`;
