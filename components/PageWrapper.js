import styled from 'styled-components';

export function PageWrapper(p) {
	return <Style>{p.children}</Style>;
}

const Style = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: top;
	min-height: calc(100vh - 2rem);
	height: 100%;
	width: 100vw;

	main {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		position: relative;
		min-height: calc(100vh - 2rem);
	}

	@media only screen and (max-width: 900px) {
	}
	@media only screen and (max-width: 500px) {
		margin: auto;
	}

	@media only screen and (min-width: 1400px) {
	}
	@media only screen and (min-width: 1700px) {
	}
`;
